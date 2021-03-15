import { useEffect } from 'react';
import Bus from './utils/Bus';
import Flashes from './components/Flashes';
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
		</>
	);
}

export default App;
