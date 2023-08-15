import React from 'react';

const Header = ({darkMode, setDarkMode }) => {

	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					setDarkMode((prev) => !prev)
				}
				className='save'
			>
				{darkMode ? `Dark` : `Light`}
			</button>
		</div>
	);
};

export default Header;