import { useState } from 'react';
import useIsMounted from '../lib/useIsMounted';
import { uploadData, handleExpressErr } from '../lib/helpers';
import PostForm from '../components/PostForm';

function NewPostPage() {
	const isMounted = useIsMounted();

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
				'POST',
				`${process.env.REACT_APP_API_URL}/posts`,
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
				window.flashes([{ msg: 'Post successfully created', type: 'success' }]);
			}
		} catch (err) {
			window.flashes([
				{ msg: 'Something went wrong, please try again later.' },
			]);
		}
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<section>
						<PostForm
							state={state}
							onInputChange={handleInputChange}
							onSubmit={handleFormSubmit}
							isSubmitting={isSubmitting}
							submitBtnText={'Submit'}
						/>
					</section>
				</div>
			</div>
		</div>
	);
}

export default NewPostPage;
