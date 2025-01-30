import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// what is reference?
// same with doing document.getElementById()
/*
이해를 위한 도움!
	- 리액트가 아닌 실제돔의 기능을 쓰려고 useRef를 엘리먼트에 넣고 element.current.addEventListener을 붙힘
	- 실제 돔에 이벤트 리스너를 추가한거라서 리액트 상에서 해당 컴포넌트가 언마운트될때 removeEventListener를 사용해서 실제 돔에 연결한 이벤트리스너를 제거
	- 제거하지않으면 실제돔에 계속 추가되어있어서 메모리 누수가 일어난다고할거에요
*/
const useClick = onClick => {
	// 변수를 안에서 copy해야 함(ref가 unmount 시점에 null 이 됨)
	const element = useRef();
	useEffect(() => {
		const current = element.current;
		// useEffect works on ComponentDidMount
		// when the useEffect mounts, it will call this
		if (current) {
			current.addEventListener('click', onClick);
		}
		// we should remove the eventListner when the compunent will unmount
		// we need to clean out after the event -> need to return a function
		return () => {
			// componentWillUnMount 일 때 호출될 것
			if (current) {
				current.removeEventListener('click', onClick);
			}
		};
	}, [onClick]); // dependency가 아예 없다면 component가 update될 때 마다 addEventListener가 될 것
	return element; // return the same reference
};

/* const useClick = onClick => {
	const element = useRef();
	useEffect(() => {
		if (element.current) {
			element.current.addEventListener('click', onClick);
		}
		return () => {
			if (element.current) {
				element.current.removeEventListner('click', onClick);
			}
		};
	}, [onClick]);
	if (typeof onClick !== 'function') {
		return;
	}
	return element;
}; */
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
