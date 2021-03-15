import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getData } from './lib/helpers';
import Bus from './utils/Bus';
import Navbar from './components/Navbar';
import Flashes from './components/Flashes';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import './App.css';

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		window.flashes = (flashes) => Bus.emit('flashes', flashes);
	}, []);

	useEffect(() => {
		async function fetchAndSetUser() {
			const data = await getData(
				`${process.env.REACT_APP_API_URL}/users/current-user`
			);
			setUser(data.user);
		}
		fetchAndSetUser();
		const intervalId = setInterval(fetchAndSetUser, 30000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<Navbar user={user} />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<Flashes />
					</div>
				</div>
			</div>
			<main>
				<Switch>
					<Route exact path="/sign-up">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-md-6">
									<SignUpForm />
								</div>
							</div>
						</div>
					</Route>
					<Route exact path="/sign-in">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-md-6">
									<SignInForm setUser={setUser} />
								</div>
							</div>
						</div>
					</Route>
				</Switch>
			</main>
		</>
	);
}

export default App;
