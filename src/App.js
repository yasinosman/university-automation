import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AccountPage from "./pages/Account";
import LoginPage from "./pages/Login";
import NewsPage from "./pages/News";
import EventsPage from "./pages/Events";
import AuthenticationProvider, { ProtectedRoute } from "./context/Authentication";
import NewsDetailPage from "./pages/NewsDetail";
import EventDetailPage from "./pages/EventDetail";

function App() {
	return (
		<BrowserRouter>
			<AuthenticationProvider>
				<CssBaseline />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/news" element={<NewsPage />} />
					<Route path="/news/:id" element={<NewsDetailPage />} />

					<Route path="/events" element={<EventsPage />} />
					<Route path="/events/:id" element={<EventDetailPage />} />

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
