import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import useClick from './hooks/useClick';

const App = () => {
	const sayHello = () => console.log('say Hello');
	const title = useClick(sayHello);
	return (
		<div className="App">
			<h1 ref={title}>Hi</h1>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
