import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// usePreventLeave - warn when the user is trying to leave without saving before
const usePreventLeave = () => {
	const listener = event => {
		event.preventDefault();
		event.returnValue = '';
	};
	const enablePrevent = () => {
		window.addEventListener('beforeunload', listener);
	};
	const disablePrevent = () => {
		window.removeEventListener('beforeunload', listener);
	};
	return { enablePrevent, disablePrevent };
};
const App = () => {
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<div className="App">
			<button onClick={enablePrevent}>Protect</button>
			<button onClick={disablePrevent}>UnProtect</button>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
