import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useIsMounted from '../lib/useIsMounted';
import { getData, putPostPublished, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import PostCard from './PostCard';

function Post({ postId, postCommentsLength }) {
	const history = useHistory();

	const isMounted = useIsMounted();

	const [isFetchingPost, setIsFetchingPost] = useState(false);
	const [post, setPost] = useState({});

	async function handlePostPublishedUpdate(post) {
		const updatedPost = await putPostPublished(post);
		if (isMounted && updatedPost._id) {
			setPost(updatedPost);
		}
	}

	useEffect(() => {
		async function fetchAndSetPost(postId) {
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

			setIsFetchingPost(true);
			const post = await fetchPost(postId);
			setIsFetchingPost(false);
			setPost(post);
		}

		isMounted && fetchAndSetPost(postId);
	}, [history, isMounted, postId]);

	return isFetchingPost ? (
		<div className="bootstrap-spinner-container">
			<BootstrapSpinner type={'border'} size={'2em'} />
		</div>
	) : post._id ? (
		<PostCard
			post={post}
			handlePostPublishedUpdate={handlePostPublishedUpdate}
			postCommentsLength={postCommentsLength}
		/>
	) : null;
}

export default Post;
