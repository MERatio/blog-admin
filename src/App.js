import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Bus from './utils/Bus';
import Flashes from './components/Flashes';
import SignUpForm from './components/SignUpForm';
import './App.css';

function App() {
	useEffect(() => {
		window.flashes = (flashes) => Bus.emit('flashes', flashes);
	}, []);

	return (
		<>
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
				</Switch>
			</main>
		</>
	);
}

export default App;
