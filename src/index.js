import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// a functional hook to update document title
// we have componentDidMount & componentWillUpdate
const useTitle = initialTitle => {
	const [title, setTitle] = useState(initialTitle);
	const updateTitle = () => {
		const htmlTitle = document.querySelector('title');
		htmlTitle.innerText = title;
	};
	useEffect(updateTitle, [title]);
	return setTitle;
};

const App = () => {
	const titleUpdater = useTitle('Loading...');
	setTimeout(() => titleUpdater('Home'), 1000);
	return (
		<div className="App">
			<h1>Hi</h1>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
