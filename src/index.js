import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// what is reference?
// same with doing document.getElementById()
const App = () => {
	const input = useRef();
	setTimeout(() => input.current.focus(), 5000);
	return (
		<div className="App">
			<h1>Hi</h1>
			<input ref={input} placeholder="la" />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
