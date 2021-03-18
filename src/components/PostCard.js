import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import useIsMounted from '../lib/useIsMounted';
import LoadingBtn from './LoadingBtn';

function PostCard({ user, postWithComments, handlePostPublishedUpdate }) {
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
					{user && (
						<LoadingBtn
							type={postWithComments.published ? 'danger' : 'warning'}
							text={postWithComments.published ? 'Unpublish' : 'Publish'}
							isLoading={isUpdatingPostPublished}
							loadingText={'Updating...'}
							onClick={handleLoadingBtnClick}
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
	handlePostPublishedUpdate: PropTypes.func.isRequired,
};

export default PostCard;
