import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

// update an input
const useInput = initialValue => {
	const [value, setValue] = useState(initialValue);
	const onChange = event => {
		console.log(event.target);
	};
	return { value, onChange };
};

const App = () => {
	const name = useInput('Ms.');
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
