import PropTypes from 'prop-types';
import PostCard from './PostCard';

function PostsCards({
	user,
	postsWithComments,
	handleUpdatePostPublishedBtnClick,
}) {
	const Postcards = postsWithComments.map((postWithComments) => (
		<PostCard
			key={postWithComments._id}
			user={user}
			postWithComments={postWithComments}
			handleUpdatePostPublishedBtnClick={handleUpdatePostPublishedBtnClick}
		/>
	));

	return <>{Postcards}</>;
}

PostsCards.propTypes = {
	user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
	postsWithComments: PropTypes.array.isRequired,
	handleUpdatePostPublishedBtnClick: PropTypes.func.isRequired,
};

export default PostsCards;
