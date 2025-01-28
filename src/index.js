import React from 'react';
import ReactDOM from 'react-dom/client';
import useInput from './useInput';
import './index.css';
import './App.css';

// update an input

const App = () => {
	// const maxLength = value => value.length <= 10;
	const noEmail = value => !value.includes('@');
	const name = useInput('Ms.', noEmail);
	return (
		<div className="App">
			<h1>Hello</h1>
			<input placeholder="Name" {...name} />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
