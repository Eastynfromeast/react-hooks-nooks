import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const content = [
	{
		tab: 'Section 1',
		content: 'I am the content of the Section 1',
	},
	{
		tab: 'Section 2',
		content: 'I am the content of the Section 2',
	},
];

const useTabs = (initialTab, allTabs) => {
	const [currentIndex, setCurrentIndex] = useState(initialTab);
	if (!allTabs || !Array.isArray(allTabs)) {
		return;
	}
	return {
		currentItem: allTabs[currentIndex],
		changeItem: setCurrentIndex,
	};
};

const App = () => {
	const { currentItem, changeItem } = useTabs(0, content);
	return (
		<div className="App">
			<h1>Hello</h1>
			{content.map((section, index) => (
				<button onClick={() => changeItem(index)}>{section.tab}</button>
			))}
			<div>{currentItem.content}</div>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
