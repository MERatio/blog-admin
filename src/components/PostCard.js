import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import useIsMounted from '../lib/useIsMounted';
import LoadingBtn from './LoadingBtn';

function PostCard({ postWithComments, handlePostPublishedUpdate }) {
	const isMounted = useIsMounted();

	const [isUpdatingPostPublished, setIsUpdatingPostPublished] = useState(false);

	async function handleLoadingBtnClick() {
		setIsUpdatingPostPublished(true);
		await handlePostPublishedUpdate(postWithComments);
		isMounted && setIsUpdatingPostPublished(false);
	}

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
					<LoadingBtn
						type={postWithComments.published ? 'danger' : 'warning'}
						text={postWithComments.published ? 'Unpublish' : 'Publish'}
						isLoading={isUpdatingPostPublished}
						loadingText={'Updating...'}
						onClick={handleLoadingBtnClick}
					/>
					<Link to={`/posts/${postWithComments._id}/edit`} className="ml-3">
						Edit
					</Link>
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
	postWithComments: PropTypes.object.isRequired,
	handlePostPublishedUpdate: PropTypes.func.isRequired,
};

export default PostCard;
