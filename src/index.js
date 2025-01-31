import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const useConfirm = (message = '', callback, rejection) => {
	if (typeof callback !== 'function') {
		return;
	}

	const confirmAction = () => {
		// eslint-disable-next-line no-restricted-globals
		if (confirm(message)) {
			callback();
		} else {
			rejection();
		}
	};
	return confirmAction;
};

const App = () => {
	const deleteWord = () => console.log('Deleting the word...');
	const abort = () => console.log('Aborted');
	const confirmDelete = useConfirm('R u sure?', deleteWord, abort);
	return (
		<div className="App">
			<button onClick={confirmDelete}>Delete the word</button>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
