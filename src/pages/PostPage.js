import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useIsMounted from '../lib/useIsMounted';
import {
	getData,
	putPostPublished,
	deletePostComment,
	handleExpressErr,
} from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import PostCard from '../components/PostCard';
import PostComments from '../components/PostComments';

function PostPage() {
	const history = useHistory();

	const { postId } = useParams();

	const isMounted = useIsMounted();

	const [isFetchingPost, setIsFetchingPost] = useState(false);
	const [post, setPost] = useState({ comments: [] });
	const [isFetchingPostComments, setIsFetchingPostComments] = useState(false);

	async function handlePostPublishedUpdate(post) {
		const data = await putPostPublished(post);
		if (data.err) {
			handleExpressErr(data.err);
		} else if (data.errors) {
			window.flashes(data.errors);
		} else {
			const updatedPost = data.post;
			if (isMounted && updatedPost._id) {
				setPost(updatedPost);
			}
		}
	}

	async function updatePostComments(postId) {
		async function fetchPostComments(postId) {
			try {
				const data = await getData(
					`${process.env.REACT_APP_API_URL}/posts/${postId}/comments`
				);
				if (data.err) {
					if ([401, 404].includes(data.err.status)) {
						history.push('/');
					}
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

		if (isMounted) {
			setIsFetchingPostComments(true);
			const postComments = await fetchPostComments(postId);
			setIsFetchingPostComments(false);
			setPost((prevPost) => ({ ...prevPost, comments: postComments }));
		}
	}

	async function handlePostCommentDelete(postId, postCommentId) {
		const data = await deletePostComment(postId, postCommentId);
		if (data.err) {
			handleExpressErr(data.err);
		} else {
			await updatePostComments(postId);
		}
	}

	useEffect(() => {
		async function fetchAndSetPost(postId) {
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

			setIsFetchingPost(true);
			const post = await fetchPost(postId);
			setIsFetchingPost(false);
			setPost(post);
		}

		isMounted && fetchAndSetPost(postId);
	}, [history, isMounted, postId]);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8 position-relative">
					<section>
						{isFetchingPost ? (
							<div className="position-relative" style={{ minHeight: '30em' }}>
								<BootstrapSpinner type={'border'} size={'2em'} />
							</div>
						) : post._id ? (
							<PostCard
								post={post}
								handlePostPublishedUpdate={handlePostPublishedUpdate}
							/>
						) : null}
						{isFetchingPostComments ? (
							<div className="position-relative" style={{ minHeight: '10em' }}>
								<BootstrapSpinner type={'border'} size={'2em'} />
							</div>
						) : (
							<PostComments
								postComments={post.comments}
								handlePostCommentDelete={handlePostCommentDelete}
							/>
						)}
					</section>
				</div>
			</div>
		</div>
	);
}

export default PostPage;
