import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

const App = () => {
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
};

class AppUgly extends React.Component {
	state = {
		item: 1,
	};
	render() {
		const { item } = this.state;
		return (
			<div className="App">
				<h1>진짜 못생긴 AppUgly</h1>
				<h2>Hello {item}</h2>
				<button onClick={this.incrementItem}>Increment</button>
				<button onClick={this.decrementItem}>Decrement</button>
			</div>
		);
	}
	incrementItem = () => {
		this.setState(state => {
			return {
				item: state.item + 1,
			};
		});
	};
	decrementItem = () => {
		this.setState(state => {
			return {
				item: state.item - 1,
			};
		});
	};
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		<AppUgly />
	</React.StrictMode>
);
