import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const App = () => {
	const sayHello = () => console.log('hello?');
	const [number, setNumber] = useState(0);
	const [aNumber, setAnumber] = useState(0);
	useEffect(sayHello, []); // useEffect = ComponentDidMount + ComponentWillUnMount + ComponentDidUpdate
	return (
		<div className="App">
			<h1>Hello</h1>
			<button onClick={() => setNumber(number + 1)}> number : {number}</button>
			<button onClick={() => setAnumber(aNumber + 1)}>aNumber: {aNumber}</button>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
