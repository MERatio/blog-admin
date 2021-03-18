import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import useIsLoading from '../lib/useIsLoading';
import LoadingBtn from './LoadingBtn';

function PostCard({
	user,
	postWithComments,
	handleUpdatePostPublishedBtnClick,
}) {
	const [updatePostPublished, isUpdatingPostPublished] = useIsLoading(
		handleUpdatePostPublishedBtnClick
	);

	return (
		<div className="card mb-2">
			<div className="card-header d-flex justify-content-between">
				<div>
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
				<div>
					{user && (
						<LoadingBtn
							type={postWithComments.published ? 'danger' : 'warning'}
							text={postWithComments.published ? 'Unpublish' : 'Publish'}
							isLoading={isUpdatingPostPublished}
							loadingText={'Updating...'}
							onClick={() => updatePostPublished(postWithComments)}
						/>
					)}
				</div>
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
	user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
	postWithComments: PropTypes.object.isRequired,
	handleUpdatePostPublishedBtnClick: PropTypes.func.isRequired,
};

export default PostCard;
