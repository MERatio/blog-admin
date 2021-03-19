import PropTypes from 'prop-types';
import PostCard from './PostCard';

function PostsCards({ postsWithComments, handlePostPublishedUpdate }) {
	const Postcards = postsWithComments.map((postWithComments) => (
		<PostCard
			key={postWithComments._id}
			postWithComments={postWithComments}
			handlePostPublishedUpdate={handlePostPublishedUpdate}
		/>
	));

	return <>{Postcards}</>;
}

PostsCards.propTypes = {
	postsWithComments: PropTypes.array.isRequired,
	handlePostPublishedUpdate: PropTypes.func.isRequired,
};

export default PostsCards;
