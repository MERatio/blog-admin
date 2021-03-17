import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useIsMounted from '../lib/useIsMounted';
import useIsLoading from '../lib/useIsLoading';
import { getData, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import PostCard from './PostCard';
import PostComments from './PostComments';

function Post() {
	const { postId } = useParams();
	const history = useHistory();

	const isMounted = useIsMounted();
	const [getPost, isGettingPost] = useIsLoading(fetchAndSetPostWithComments);

	const [postWithComments, setPostWithComments] = useState({});

	async function fetchPostComments(postId) {
		try {
			const data = await getData(
				`${process.env.REACT_APP_API_URL}/posts/${postId}/comments`
			);
			if (data.err) {
				handleExpressErr(data.err);
			} else {
				return data.comments;
			}
		} catch (err) {
			window.flashes([
				{ msg: 'Something went wrong, please try again later.' },
			]);
		}
	}

	async function fetchAndSetPostWithComments(isMounted, postId) {
		async function fetchPost(postId) {
			try {
				const data = await getData(
					`${process.env.REACT_APP_API_URL}/posts/${postId}`
				);
				if (data.err) {
					if ([401, 404].includes(data.err.status)) {
						history.push('/');
					}
					handleExpressErr(data.err);
				} else {
					return data.post;
				}
			} catch (err) {
				window.flashes([
					{ msg: 'Something went wrong, please try again later.' },
				]);
			}
		}

		if (isMounted) {
			const post = await fetchPost(postId);
			const postComments = await fetchPostComments(postId);
			setPostWithComments({ ...post, comments: postComments });
		}
	}

	useEffect(() => {
		getPost(isMounted, postId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted, postId]);

	return isGettingPost ? (
		<div className="bootstrap-spinner-container">
			<BootstrapSpinner type={'border'} size={'2em'} />
		</div>
	) : postWithComments._id ? (
		<section className="mb-4">
			<PostCard postWithComments={postWithComments} />
			<PostComments postComments={postWithComments.comments} />
		</section>
	) : null;
}

export default Post;
