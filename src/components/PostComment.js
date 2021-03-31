import { useState } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import useIsMounted from '../lib/useIsMounted';
import LoadingBtn from './LoadingBtn';

function PostComment({ postComment, handlePostCommentDelete }) {
	const isMounted = useIsMounted();

	const [isDeletingPostComment, setIsDeletingPostComment] = useState(false);

	async function handleLoadingBtnClick() {
		setIsDeletingPostComment(true);
		await handlePostCommentDelete(
			postComment.post._id || postComment.post,
			postComment._id
		);
		isMounted && setIsDeletingPostComment(false);
	}

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
					onClick={handleLoadingBtnClick}
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
