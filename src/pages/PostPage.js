import Post from '../components/Post';

function PostPage() {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8 position-relative">
					<Post />
				</div>
			</div>
		</div>
	);
}

export default PostPage;
