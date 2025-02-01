import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// useFadeIn
const useFadeIn = (duration = 3, delay = 0) => {
	const element = useRef();

	useEffect(() => {
		if (typeof duration !== 'number' || typeof delay !== 'number') {
			return;
		}
		const current = element.current;
		if (current) {
			/*
			css animation으로 수정하면 이렇게
			current.style.animation = `fadeIn ${duration}s ease-in ${delay}s forwards`;
			*/
			// JS 로 수정하려면 이렇게
			setTimeout(() => {
				current.style.opacity = 1;
				current.style.transition = `opacity ${duration}s ease-in`;
			}, delay);
		}
	}, [duration, delay]);
	return { ref: element, style: { opacity: 0 } };
};

const App = () => {
	const fadeInH1 = useFadeIn(3, 100);
	const fadeInP = useFadeIn(5, 1000);
	return (
		<div className="App">
			<h1 {...fadeInH1}>Element</h1>
			<p {...fadeInP}> lorem ipsum blah blah blah</p>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
