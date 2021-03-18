import PropTypes from 'prop-types';
import Posts from '../components/Posts';

function PostsPage({ user }) {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<Posts user={user} />
				</div>
			</div>
		</div>
	);
}

PostsPage.propTypes = {
	user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default PostsPage;
