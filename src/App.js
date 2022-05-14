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
import CoursesPage from "./pages/Courses";
import CourseDetailPage, { CourseAnnouncements, CourseAssignments } from "./pages/CourseDetail";

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

					<Route
						path="/courses"
						element={
							<ProtectedRoute>
								<CoursesPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/courses/:id"
						element={
							<ProtectedRoute>
								<CourseDetailPage />
							</ProtectedRoute>
						}
					>
						<Route path="announcements" element={<CourseAnnouncements />} />
						<Route path="assignments" element={<CourseAssignments />} />
					</Route>

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
