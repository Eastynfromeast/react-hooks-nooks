import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// useNetwork will show the stauts of the network of the browser
const useNetwork = onChange => {
	const [status, setStatus] = useState(navigator.onLine);
	const handleChange = () => {
		if (typeof onChange === 'function') {
			onChange(navigator.onLine);
		}
		setStatus(navigator.onLine);
	};
	useEffect(() => {
		window.addEventListener('online', handleChange);
		window.addEventListener('offline', handleChange);
		return () => {
			window.removeEventListener('online', handleChange);
			window.removeEventListener('offline', handleChange);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return status;
};

const App = () => {
	const handleNetworkChange = online => console.log(online ? 'We just went online' : 'we are offline');
	const onLine = useNetwork(handleNetworkChange);
	return (
		<div className="App">
			<h1>Network status : {onLine ? 'Online' : 'Offline'}</h1>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
