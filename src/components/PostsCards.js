import PropTypes from 'prop-types';
import PostCard from './PostCard';

function PostsCards({ postsWithComments }) {
	const Postcards = postsWithComments.map((postWithComments) => (
		<PostCard key={postWithComments._id} postWithComments={postWithComments} />
	));

	return <>{Postcards}</>;
}

PostsCards.propTypes = {
	postsWithComments: PropTypes.array.isRequired,
};

export default PostsCards;
