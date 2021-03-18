import PropTypes from 'prop-types';
import PostComment from './PostComment';

function PostComments({ postComments, handlePostCommentDelete }) {
	return postComments.length > 0 ? (
		<ul className="list-group">
			{postComments.map((postComment) => (
				<PostComment
					key={postComment._id}
					postComment={postComment}
					handlePostCommentDelete={handlePostCommentDelete}
				/>
			))}
		</ul>
	) : null;
}

PostComments.propTypes = {
	postComments: PropTypes.array.isRequired,
	handlePostCommentDelete: PropTypes.func.isRequired,
};

export default PostComments;
