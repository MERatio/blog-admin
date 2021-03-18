import PropTypes from 'prop-types';
import format from 'date-fns/format';
import useIsLoading from '../lib/useIsLoading';
import LoadingBtn from './LoadingBtn';

function PostComment({ postComment, handlePostCommentDelete }) {
	const [deletePostComment, isDeletingPostComment] = useIsLoading(
		handlePostCommentDelete
	);

	return (
		<li className="list-group-item d-flex justify-content-between">
			<div>
				<p className="h6 mb-1">
					{postComment.author.firstName + ' ' + postComment.author.lastName}
				</p>
				<p className="text-muted mb-2">
					{format(new Date(postComment.createdAt), 'PPpp')}
				</p>
				<p className="mb-2">{postComment.body}</p>
			</div>
			<div>
				<LoadingBtn
					type={'danger'}
					text={'Delete'}
					isLoading={isDeletingPostComment}
					loadingText={'Deleting...'}
					onClick={() => deletePostComment(postComment._id)}
				/>
			</div>
		</li>
	);
}

PostComment.propTypes = {
	postComment: PropTypes.object.isRequired,
	handlePostCommentDelete: PropTypes.func.isRequired,
};

export default PostComment;
