import React from "react";
import ROUTES from "constants/routes";
import { Routes, Route } from "react-router-dom";

import Home from "pages/index";

const Test = ({ text = "test comp" }) => {
	return <div>text = {text}</div>;
};

const App = () => {
	const { HOME, TASKS } = ROUTES;
	return (
		<Routes>
			<Route path={HOME} element={<Home />} />
			<Route path={TASKS} element={<Test />} />
		</Routes>
	);
};
export default App;
