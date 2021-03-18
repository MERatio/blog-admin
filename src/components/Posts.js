import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useIsMounted from '../lib/useIsMounted';
import useIsLoading from '../lib/useIsLoading';
import { getData, putPostPublished, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import PostsCards from './PostsCards';

function Posts({ user }) {
	const isMounted = useIsMounted();
	const [getPostsWithComments, isGettingPostsWithComments] = useIsLoading(
		fetchAndSetPostsWithComments
	);

	const [postsWithComments, setPostsWithComments] = useState([]);

	async function fetchAndSetPostsWithComments(isMounted) {
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
			const posts = await fetchPosts();
			const newPostsWithComments = await fetchAndAttachPostsToComments(posts);
			setPostsWithComments(newPostsWithComments);
		}
	}

	async function handleUpdatePostPublishedBtnClick(postWithComments) {
		const updatedPost = await putPostPublished(postWithComments);
		if (isMounted) {
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
		getPostsWithComments(isMounted);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted]);

	return isGettingPostsWithComments ? (
		<div className="bootstrap-spinner-container">
			<BootstrapSpinner type={'border'} size={'2em'} />
		</div>
	) : (
		<section className="position-relative">
			<PostsCards
				user={user}
				postsWithComments={postsWithComments}
				handleUpdatePostPublishedBtnClick={handleUpdatePostPublishedBtnClick}
			/>
		</section>
	);
}

Posts.propTypes = {
	user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default Posts;
