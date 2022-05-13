import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

function App() {
	return (
		<BrowserRouter>
			<CssBaseline />
			<Container>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
}

export default App;
