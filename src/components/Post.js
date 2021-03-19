import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useIsMounted from '../lib/useIsMounted';
import {
	getData,
	putPostPublished,
	deletePostComment,
	handleExpressErr,
} from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import PostCard from './PostCard';
import PostComments from './PostComments';

function Post() {
	const { postId } = useParams();
	const history = useHistory();

	const isMounted = useIsMounted();

	const [isFetchingPostWithComments, setIsFetchingPostWithComments] = useState(
		false
	);

	const [postWithComments, setPostWithComments] = useState({});

	async function fetchPostComments(postId) {
		try {
			const data = await getData(
				`${process.env.REACT_APP_API_URL}/posts/${postId}/comments`
			);
			if (data.err) {
				handleExpressErr(data.err);
			} else {
				return data.comments;
			}
		} catch (err) {
			window.flashes([
				{ msg: 'Something went wrong, please try again later.' },
			]);
		}
	}

	async function fetchAndSetPostWithComments() {
		async function fetchPost(postId) {
			try {
				const data = await getData(
					`${process.env.REACT_APP_API_URL}/posts/${postId}`
				);
				if (data.err) {
					if ([401, 404].includes(data.err.status)) {
						history.push('/');
					}
					handleExpressErr(data.err);
				} else {
					return data.post;
				}
			} catch (err) {
				window.flashes([
					{ msg: 'Something went wrong, please try again later.' },
				]);
			}
		}

		if (isMounted) {
			setIsFetchingPostWithComments(true);
			const post = await fetchPost(postId);
			const postComments = await fetchPostComments(postId);
			setIsFetchingPostWithComments(false);
			setPostWithComments({ ...post, comments: postComments });
		}
	}

	async function handlePostPublishedUpdate(postWithComments) {
		const updatedPost = await putPostPublished(postWithComments);
		if (isMounted && updatedPost._id) {
			setPostWithComments((prevPostWithComments) => ({
				...prevPostWithComments,
				published: updatedPost.published,
			}));
		}
	}

	async function handlePostCommentDelete(postCommentId) {
		const deletedPostComment = await deletePostComment(postId, postCommentId);
		if (isMounted && deletedPostComment._id) {
			setPostWithComments((prevPostWithComments) => ({
				...prevPostWithComments,
				comments: prevPostWithComments.comments.filter(
					(comment) => comment._id !== postCommentId
				),
			}));
		}
	}

	useEffect(() => {
		fetchAndSetPostWithComments();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted]);

	return isFetchingPostWithComments ? (
		<div className="bootstrap-spinner-container">
			<BootstrapSpinner type={'border'} size={'2em'} />
		</div>
	) : postWithComments._id ? (
		<section className="mb-4">
			<PostCard
				postWithComments={postWithComments}
				handlePostPublishedUpdate={handlePostPublishedUpdate}
			/>
			<PostComments
				postComments={postWithComments.comments}
				handlePostCommentDelete={handlePostCommentDelete}
			/>
		</section>
	) : null;
}

export default Post;