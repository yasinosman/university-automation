import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

function App() {
	return (
		<BrowserRouter>
			<CssBaseline />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
