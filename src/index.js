import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// useNetwork will show the stauts of the network of the browser
const useNetwork = onChange => {
	const [status, setStatus] = useState(navigator.onLine || true);
	const handleChange = () => {
		if (typeof onChange === 'function') {
			onChange(navigator.online);
		}
		setStatus(navigator.online);
	};
	useEffect(() => {
		window.addEventListener('online', handleChange);
		window.addEventListener('offline', handleChange);
		return () => {
			window.removeEventListener('online', handleChange);
			window.removeEventListener('offline', handleChange);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status]);
	return status;
};

const App = () => {
	const handleNetworkChange = () => console.log(onLine ? 'We just went online' : 'we are offline');
	const onLine = useNetwork(handleNetworkChange);
	return (
		<div className="App">
			<h1>Network status : {onLine ? 'Online' : 'Offline'}</h1>
			<h2>{onLine ? 'Online' : 'Offline'}</h2>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
