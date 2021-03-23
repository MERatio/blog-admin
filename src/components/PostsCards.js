import PropTypes from 'prop-types';
import PostCard from './PostCard';

function PostsCards({ posts, handlePostPublishedUpdate }) {
	const Postcards = posts.map((post) => (
		<PostCard
			key={post._id}
			post={post}
			handlePostPublishedUpdate={handlePostPublishedUpdate}
		/>
	));

	return <>{Postcards}</>;
}

PostsCards.propTypes = {
	posts: PropTypes.array.isRequired,
	handlePostPublishedUpdate: PropTypes.func.isRequired,
};

export default PostsCards;
