import { useRef } from 'react';

export const useFullscreen = callback => {
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
