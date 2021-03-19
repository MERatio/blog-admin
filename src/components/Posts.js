import { useState, useEffect } from 'react';
import useIsMounted from '../lib/useIsMounted';
import { getData, putPostPublished, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import PostsCards from './PostsCards';

function Posts() {
	const isMounted = useIsMounted();

	const [postsWithComments, setPostsWithComments] = useState([]);

	const [
		isFetchingPostsWithComments,
		setIsFetchingPostsWithComments,
	] = useState(false);

	async function handlePostPublishedUpdate(postWithComments) {
		const updatedPost = await putPostPublished(postWithComments);
		if (isMounted && updatedPost._id) {
			setPostsWithComments((prevPostsWithComments) => {
				return prevPostsWithComments.map((prevPostWithComments) => {
					if (prevPostWithComments._id !== postWithComments._id) {
						return prevPostWithComments;
					} else {
						return {
							...prevPostWithComments,
							published: updatedPost.published,
						};
					}
				});
			});
		}
	}

	useEffect(() => {
		async function fetchAndSetPostsWithComments() {
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

			async function fetchAndAttachPostsToComments(posts) {
				try {
					const postsWithComments = await Promise.all(
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
					return postsWithComments;
				} catch (err) {
					window.flashes([
						{ msg: 'Something went wrong, please try again later.' },
					]);
				}
			}

			if (isMounted) {
				setIsFetchingPostsWithComments(true);
				const posts = await fetchPosts();
				const newPostsWithComments = await fetchAndAttachPostsToComments(posts);
				setIsFetchingPostsWithComments(false);
				setPostsWithComments(newPostsWithComments);
			}
		}

		fetchAndSetPostsWithComments();
	}, [isMounted]);

	return isFetchingPostsWithComments ? (
		<div className="bootstrap-spinner-container">
			<BootstrapSpinner type={'border'} size={'2em'} />
		</div>
	) : (
		<section className="position-relative">
			<PostsCards
				postsWithComments={postsWithComments}
				handlePostPublishedUpdate={handlePostPublishedUpdate}
			/>
		</section>
	);
}

export default Posts;
