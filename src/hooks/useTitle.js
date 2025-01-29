import { useState, useEffect } from 'react';

// a functional hook to update document title
// we have componentDidMount & componentWillUpdate
const useTitle = initialTitle => {
	const [title, setTitle] = useState(initialTitle);
	const updateTitle = () => {
		const htmlTitle = document.querySelector('title');
		htmlTitle.innerText = title;
	};
	useEffect(updateTitle, [title]);
	return setTitle;
};

export default useTitle;
