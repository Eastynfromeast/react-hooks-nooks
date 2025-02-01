import { useRef, useEffect } from 'react';

export const useFadeIn = (duration = 3, delay = 0) => {
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
