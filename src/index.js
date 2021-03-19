import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootswatch/dist/litera/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

dotenv.config();

ReactDOM.render(
	<React.StrictMode>
		<Router basename={process.env.PUBLIC_URL}>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();