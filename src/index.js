import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const useFullscreen = callback => {
	const element = useRef();
	const runCallback = isFull => {
		if (callback && typeof callback === 'function') {
			callback(isFull);
		}
	};
	const triggerFullScr = () => {
		if (element.current) {
			if (element.current.requestFullscreen) {
				element.current.requestFullscreen();
			} else if (element.current.mozRequestFullScreen) {
				element.current.mozRequestFullScreen();
			} else if (element.current.webkitRequestFullscreen) {
				element.current.webkitRequestFullscreen();
			} else if (element.current.msRequestFullscreen) {
				element.current.msRequestFullscreen();
			}
			runCallback(true);
		}
	};
	const exitFullScr = () => {
		document.exitFullscreen();

		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
		runCallback(false);
	};
	return { element, triggerFullScr, exitFullScr };
};

const App = () => {
	const onFullScr = isFull => {
		console.log(isFull ? 'We are full' : 'We are not full');
	};
	const { element, triggerFullScr, exitFullScr } = useFullscreen(onFullScr);
	return (
		<div className="App">
			<h1> useFullscreen </h1>
			<div ref={element}>
				<img src="https://avatars.githubusercontent.com/u/95607479?v=4" alt="my github account" />
				<button onClick={exitFullScr}>Exit fullscreen</button>
			</div>
			<button onClick={triggerFullScr}>Make fullscreen</button>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
