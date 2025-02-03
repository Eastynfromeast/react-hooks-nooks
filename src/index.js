import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const useNotification = (title, options) => {
	if (!('Notification' in window)) {
		return;
	}

	const fireNotif = () => {
		if (Notification.permission !== 'granted') {
			Notification.requestPermission().then(permission => {
				if (permission === 'granted') {
					new Notification(title, options);
				} else {
					return;
				}
			});
		} else {
			new Notification(title, options);
		}
	};
	return fireNotif;
};

const App = () => {
	const triggerNotif = useNotification('Can I steal your kimchi?', { body: "I love kimchi, don't you?" });
	return (
		<div className="App">
			<h1> useNotification </h1>
			<button onClick={triggerNotif}>Ask!</button>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
