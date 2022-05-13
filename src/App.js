import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AccountPage from "./pages/Account";
import LoginPage from "./pages/Login";

function App() {
	return (
		<BrowserRouter>
			<CssBaseline />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="account" element={<AccountPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
