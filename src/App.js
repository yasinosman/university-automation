import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AccountPage from "./pages/Account";
import LoginPage from "./pages/Login";
import AuthenticationProvider, { ProtectedRoute } from "./context/Authentication";

function App() {
	return (
		<BrowserRouter>
			<AuthenticationProvider>
				<CssBaseline />
				<Routes>
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<HomePage />
							</ProtectedRoute>
						}
					/>
					<Route path="/login" element={<LoginPage />} />
					<Route
						path="account"
						element={
							<ProtectedRoute>
								<AccountPage />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</AuthenticationProvider>
		</BrowserRouter>
	);
}

export default App;
