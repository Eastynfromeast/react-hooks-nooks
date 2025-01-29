import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// what is reference?
// same with doing document.getElementById()
const useClick = onClick => {
	// 변수를 안에서 copy해야 함(ref가 unmount 시점에 null 이 됨)
	const ref = useRef();
	useEffect(() => {
		const element = ref.current;
		// useEffect works on ComponentDidMount
		if (typeof onClick !== 'function') {
			return;
		}
		if (element) {
			element.addEventListener('click', onClick);
		}
		// we need to clean this event when ComponentWillUnMount
		return () => {
			if (element) {
				element.removeEventListener('click', onClick);
			}
		};
	}, []);
	return typeof onClick !== 'function' ? undefined : ref.current; // return the same reference
};
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
