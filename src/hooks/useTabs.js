import { useState } from 'react';

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

export default useTabs;
