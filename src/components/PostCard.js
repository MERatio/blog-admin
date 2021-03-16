import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

function PostCard({ postWithComments }) {
	return (
		<div className="card mb-2">
			<div className="card-header">
				<h5 className="card-title">{postWithComments.title}</h5>
				<p className="card-subtitle mb-2">
					{postWithComments.author.firstName +
						' ' +
						postWithComments.author.lastName}
				</p>
				<p className="card-subtitle">
					{format(new Date(postWithComments.createdAt), 'PPpp')}
				</p>
			</div>
			<div className="card-body">
				<p className="card-text">{postWithComments.body}</p>
				<Link to={`/posts/${postWithComments._id}`} className="card-link">
					{postWithComments.comments.length} comments
				</Link>
			</div>
		</div>
	);
}

PostCard.propTypes = {
	postWithComments: PropTypes.object.isRequired,
};

export default PostCard;
