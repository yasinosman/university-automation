import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import EditProfileForm from "./EditProfileForm";

const AccountPage = () => {
	return (
		<>
			<Navbar />

			<PageTitle title="Hesap" />

			<Container maxWidth="xl">
				<Grid container spacing={5}>
					<Grid item xs={12} md={6}>
						<EditProfileForm />
					</Grid>
					<Grid item xs={12} md={6}>
						<Box
							component="form"
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								"& .MuiTextField-root": { marginBottom: 2 },
							}}
							noValidate
							autoComplete="off"
						>
							<Typography variant="overline" display="block" gutterBottom>
								Şifre Güncelleme
							</Typography>
							<TextField
								id="current-password"
								label="Mevcut Şifre"
								type="password"
								autoComplete="current-password"
							/>
							<TextField id="new-password" label="Yeni Şifre" variant="outlined" type="password" />
							<TextField
								id="confirm-new-password"
								label="Yeni Şifre Tekrarı"
								variant="outlined"
								type="password"
							/>
							<Button variant="contained">Şifreyi Güncelle</Button>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default AccountPage;
