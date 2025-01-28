import { useState } from 'react';
import './App.css';

function App() {
	const [item, setItem] = useState(1);
	const incrementItem = () => setItem(item + 1);
	const decrementItem = () => setItem(item - 1);
	return (
		<div className="App">
			<h1>실전형 React Hooks 10개</h1>
			<h2>Hello {item}</h2>
			<button onClick={incrementItem}>Increment</button>
			<button onClick={decrementItem}>Decrement</button>
		</div>
	);
}

export default App;
