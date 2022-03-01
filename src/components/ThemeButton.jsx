import React from "react";

const ThemeButton = ({ theme, toggleTheme }) => {
	return <div onClick={toggleTheme}>{theme}</div>;
};

export default ThemeButton;
