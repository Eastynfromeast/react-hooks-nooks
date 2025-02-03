import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { useAxios } from './hooks/useAxios';

const App = () => {
	const { loading, data, error, refetch } = useAxios({ url: 'https://yts.mx/api/v2/list_movies.json' });
	return (
		<div className="App">
			<h1> useAxios </h1>
			<h2>{data && data.status}</h2>
			<h3>{loading && 'Loading...'}</h3>
			<button onClick={refetch}>Refetch</button>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
