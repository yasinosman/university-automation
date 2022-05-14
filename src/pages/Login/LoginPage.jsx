import React from "react";
import { Avatar, Box, Container, CssBaseline, Typography } from "@mui/material";
import { BookOnline as BookOnlineIcon } from "@mui/icons-material";

import LoginForm from "./components/LoginForm";

const LoginPage = () => {
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
					<BookOnlineIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<LoginForm />
			</Box>
			<Copyright sx={{ mt: 8, mb: 4 }} />
		</Container>
	);
};

function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{"Copyright © uniPortal "}
			{new Date().getFullYear()}
		</Typography>
	);
}

export default LoginPage;
