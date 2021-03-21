import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useIsMounted from '../lib/useIsMounted';
import { getData, uploadData, handleExpressErr } from '../lib/helpers';
import BootstrapSpinner from '../components/BootstrapSpinner';
import PostForm from '../components/PostForm';

function EditPostPage() {
	const { postId } = useParams();
	const history = useHistory();

	const isMounted = useIsMounted();

	const [isFetchingEditPost, setIsFetchingEditPost] = useState(false);
	const [state, setState] = useState({
		title: '',
		body: '',
		published: false,
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	function handleInputChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		setState((prevState) => ({ ...prevState, [name]: value }));
	}

	async function handleFormSubmit(e) {
		try {
			e.preventDefault();
			setIsSubmitting(true);
			const data = await uploadData(
				'PUT',
				`${process.env.REACT_APP_API_URL}/posts/${postId}`,
				state
			);
			isMounted && setIsSubmitting(false);
			if (data.err) {
				handleExpressErr(data.err);
			} else if (data.errors) {
				const { title, body, published } = data.post;
				isMounted && setState({ title, body, published });
				window.flashes(data.errors);
			} else {
				setState({ title: '', body: '', published: false });
				history.push('/');
				window.flashes([{ msg: 'Post successfully updated', type: 'success' }]);
			}
		} catch (err) {
			window.flashes([
				{ msg: 'Something went wrong, please try again later.' },
			]);
		}
	}

	useEffect(() => {
		async function fetchAndSetEditPost(postId) {
			try {
				setIsFetchingEditPost(true);
				const data = await getData(
					`${process.env.REACT_APP_API_URL}/posts/${postId}/edit`
				);
				setIsFetchingEditPost(false);
				if (data.err) {
					if ([401, 404].includes(data.err.status)) {
						history.push('/');
					}
					handleExpressErr(data);
				} else {
					const { title, body, published } = data.post;
					setState({ title, body, published });
				}
			} catch (err) {
				window.flashes([
					{ msg: 'Something went wrong, please try again later.' },
				]);
			}
		}
		fetchAndSetEditPost(postId);
	}, [postId, history]);

	return isFetchingEditPost ? (
		<div className="bootstrap-spinner-container">
			<BootstrapSpinner type={'border'} size={'2em'} />
		</div>
	) : state.title ? (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<PostForm
						state={state}
						onInputChange={handleInputChange}
						onSubmit={handleFormSubmit}
						isSubmitting={isSubmitting}
						submitBtnText={'Update'}
					/>
				</div>
			</div>
		</div>
	) : null;
}

export default EditPostPage;
