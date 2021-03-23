import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import pluralize from 'pluralize';
import useIsMounted from '../lib/useIsMounted';
import LoadingBtn from './LoadingBtn';

function PostCard({ post, handlePostPublishedUpdate, postCommentsLength }) {
	const isMounted = useIsMounted();

	const [isUpdatingPostPublished, setIsUpdatingPostPublished] = useState(false);

	async function handleLoadingBtnClick() {
		setIsUpdatingPostPublished(true);
		await handlePostPublishedUpdate(post);
		isMounted && setIsUpdatingPostPublished(false);
	}

	return (
		<article className="card mb-2">
			<div className="card-header d-flex justify-content-between">
				<div>
					<h5 className="card-title">{post.title}</h5>
					<p className="card-subtitle mb-2">
						{post.author.firstName + ' ' + post.author.lastName}
					</p>
					<p className="card-subtitle">
						{format(new Date(post.createdAt), 'PPpp')}
					</p>
				</div>
				<div>
					<LoadingBtn
						type={post.published ? 'danger' : 'warning'}
						text={post.published ? 'Unpublish' : 'Publish'}
						isLoading={isUpdatingPostPublished}
						loadingText={'Updating...'}
						onClick={handleLoadingBtnClick}
					/>
					<Link to={`/posts/${post._id}/edit`} className="ml-3">
						Edit
					</Link>
				</div>
			</div>
			<div className="card-body">
				<p className="card-text">{post.body}</p>
				<Link to={`/posts/${post._id}`} className="card-link">
					{pluralize(
						'comments',
						post.comments ? post.comments.length : postCommentsLength,
						true
					)}
				</Link>
			</div>
		</article>
	);
}

PostCard.propTypes = {
	post: PropTypes.object.isRequired,
	handlePostPublishedUpdate: PropTypes.func.isRequired,
	postCommentsLength: PropTypes.number,
};

export default PostCard;
