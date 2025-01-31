import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const useBeforeLeave = onBefore => {
	const handle = event => {
		const { clientY } = event;
		if (clientY <= 0) {
			onBefore();
		}
	};
	useEffect(() => {
		if (typeof onBefore !== 'function') {
			return;
		}
		document.addEventListener('mouseleave', handle);
		return () => {
			document.removeEventListener('mouseleave', handle);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

const App = () => {
	const begForLife = () => console.log("Pleeease don't leave...");
	useBeforeLeave(begForLife);
	return <div className="App"></div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
