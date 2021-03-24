import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useIsMounted from '../lib/useIsMounted';
import { getData, deletePostComment, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import Post from '../components/Post';
import PostComments from '../components/PostComments';

function PostPage() {
	const history = useHistory();

	const { postId } = useParams();

	const isMounted = useIsMounted();

	const [isFetchingPostComments, setIsFetchingPostComments] = useState(false);
	const [postComments, setPostComments] = useState([]);

	async function fetchAndSetPostComments(postId) {
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

		setIsFetchingPostComments(true);
		const postComments = await fetchPostComments(postId);
		setIsFetchingPostComments(false);
		setPostComments(postComments);
	}

	async function handlePostCommentDelete(postId, postCommentId) {
		const data = await deletePostComment(postId, postCommentId);
		if (data.err) {
			handleExpressErr(data.err);
		} else {
			await fetchAndSetPostComments(postId);
		}
	}

	useEffect(() => {
		isMounted && fetchAndSetPostComments(postId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted, postId]);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8 position-relative">
					<section>
						<Post postId={postId} postCommentsLength={postComments.length} />
						{isFetchingPostComments ? (
							<div className="position-relative" style={{ minHeight: '10em' }}>
								<BootstrapSpinner type={'border'} size={'2em'} />
							</div>
						) : (
							<PostComments
								postComments={postComments}
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
