import PropTypes from 'prop-types';
import PostCard from './PostCard';

function PostsCards({ user, postsWithComments, handlePostPublishedUpdate }) {
	const Postcards = postsWithComments.map((postWithComments) => (
		<PostCard
			key={postWithComments._id}
			user={user}
			postWithComments={postWithComments}
			handlePostPublishedUpdate={handlePostPublishedUpdate}
		/>
	));

	return <>{Postcards}</>;
}

PostsCards.propTypes = {
	user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
	postsWithComments: PropTypes.array.isRequired,
	handlePostPublishedUpdate: PropTypes.func.isRequired,
};

export default PostsCards;
