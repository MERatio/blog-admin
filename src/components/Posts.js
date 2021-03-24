import { useState, useEffect } from 'react';
import useIsMounted from '../lib/useIsMounted';
import { getData, putPostPublished, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import PostsCards from './PostsCards';

function Posts() {
	const isMounted = useIsMounted();

	const [posts, setPosts] = useState([]);

	const [isFetchingPosts, setIsFetchingPosts] = useState(false);

	async function handlePostPublishedUpdate(posts) {
		const data = await putPostPublished(posts);
		if (data.err) {
			handleExpressErr(data.err);
		} else if (data.errors) {
			window.flashes(data.errors);
		} else {
			const updatedPost = data.post;
			if (isMounted && updatedPost._id) {
				setPosts((prevPosts) => {
					return prevPosts.map((prevPost) => {
						if (prevPost._id !== posts._id) {
							return prevPost;
						} else {
							return {
								...prevPost,
								published: updatedPost.published,
							};
						}
					});
				});
			}
		}
	}

	useEffect(() => {
		async function fetchAndSetPosts() {
			async function fetchPosts() {
				try {
					const data = await getData(`${process.env.REACT_APP_API_URL}/posts`);
					if (data.err) {
						handleExpressErr(data.err);
					} else {
						return data.posts;
					}
				} catch (err) {
					window.flashes([
						{ msg: 'Something went wrong, please try again later.' },
					]);
				}
			}

			async function fetchAndAttachCommentsToPosts(posts) {
				try {
					return await Promise.all(
						posts.map(async (post) => {
							try {
								const data = await getData(
									`${process.env.REACT_APP_API_URL}/posts/${post._id}/comments`
								);
								if (data.err) {
									handleExpressErr(data.err);
								} else {
									return { ...post, comments: data.comments };
								}
							} catch (err) {
								window.flashes([
									{ msg: 'Something went wrong, please try again later.' },
								]);
							}
						})
					);
				} catch (err) {
					window.flashes([
						{ msg: 'Something went wrong, please try again later.' },
					]);
				}
			}

			if (isMounted) {
				setIsFetchingPosts(true);
				const posts = await fetchPosts();
				const newPosts = await fetchAndAttachCommentsToPosts(posts);
				setIsFetchingPosts(false);
				setPosts(newPosts);
			}
		}

		fetchAndSetPosts();
	}, [isMounted]);

	return isFetchingPosts ? (
		<div className="position-relative" style={{ minHeight: '30em' }}>
			<BootstrapSpinner type={'border'} size={'2em'} />
		</div>
	) : (
		<PostsCards
			posts={posts}
			handlePostPublishedUpdate={handlePostPublishedUpdate}
		/>
	);
}

export default Posts;
