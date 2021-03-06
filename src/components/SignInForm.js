import { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import useIsMounted from '../lib/useIsMounted';
import { uploadData, handleExpressErr } from '../lib/helpers';
import SubmitBtn from './SubmitBtn';

function SignInForm({ setUser }) {
	const history = useHistory();

	const isMounted = useIsMounted();

	const [state, setState] = useState({
		username: '',
		password: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	function handleInputChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setState((prevState) => ({ ...prevState, [name]: value }));
	}

	async function handleSubmit(e) {
		try {
			e.preventDefault();
			setIsSubmitting(true);
			const data = await uploadData(
				'POST',
				`${process.env.REACT_APP_API_URL}/auth/sign-in`,
				state
			);
			isMounted && setIsSubmitting(false);
			if (data.err) {
				isMounted && setState((prevState) => ({ ...prevState, password: '' }));
				handleExpressErr(data.err);
			} else {
				if (data.user && data.user.admin) {
					localStorage.setItem('jwt', data.token);
					setUser(data.user);
					window.flashes([
						{ msg: 'You have successfuly signed in', type: 'success' },
					]);
					history.push('/');
				} else {
					isMounted && setState({ username: '', password: '' });
					window.flashes([
						{ msg: `Admin account is required`, type: 'warning' },
					]);
				}
			}
		} catch (err) {
			window.flashes([
				{ msg: 'Something went wrong, please try again later.' },
			]);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="username">Username</label>
				<input
					type="text"
					className="form-control"
					id="username"
					placeholder="johnDoe01"
					name="username"
					value={state.username}
					required
					maxLength="20"
					onChange={handleInputChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="form-control"
					id="password"
					name="password"
					value={state.password}
					required
					minLength="8"
					onChange={handleInputChange}
				/>
			</div>
			<SubmitBtn isSubmitting={isSubmitting} />
		</form>
	);
}

SignInForm.propTypes = {
	setUser: PropTypes.func.isRequired,
};

export default SignInForm;
