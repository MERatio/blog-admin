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

	const [isFetchingPost, setIsFetchingPost] = useState(false);

	const [post, setPost] = useState({});

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

	async function fetchAndSetPost() {
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
			setIsFetchingPost(true);
			const post = await fetchPost(postId);
			const postComments = await fetchPostComments(postId);
			setIsFetchingPost(false);
			setPost({ ...post, comments: postComments });
		}
	}

	async function handlePostPublishedUpdate(post) {
		const updatedPost = await putPostPublished(post);
		if (isMounted && updatedPost._id) {
			setPost((prevPost) => ({
				...prevPost,
				published: updatedPost.published,
			}));
		}
	}

	async function handlePostCommentDelete(postCommentId) {
		const deletedPostComment = await deletePostComment(postId, postCommentId);
		if (isMounted && deletedPostComment._id) {
			setPost((prevPost) => ({
				...prevPost,
				comments: prevPost.comments.filter(
					(comment) => comment._id !== postCommentId
				),
			}));
		}
	}

	useEffect(() => {
		fetchAndSetPost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted]);

	return isFetchingPost ? (
		<div className="bootstrap-spinner-container">
			<BootstrapSpinner type={'border'} size={'2em'} />
		</div>
	) : post._id ? (
		<section className="mb-4">
			<PostCard
				post={post}
				handlePostPublishedUpdate={handlePostPublishedUpdate}
			/>
			<PostComments
				postComments={post.comments}
				handlePostCommentDelete={handlePostCommentDelete}
			/>
		</section>
	) : null;
}

export default Post;
