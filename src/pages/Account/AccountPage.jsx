import { Container, Grid } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import ChangePasswordForm from "./components/ChangePasswordForm";
import EditProfileForm from "./components/EditProfileForm";

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
						<ChangePasswordForm />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default AccountPage;
