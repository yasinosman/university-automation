import React from "react";
import { Container } from "@mui/material";

import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";

const EventsPage = () => {
	return (
		<>
			<Navbar />

			<Container maxWidth="xl">
				<PageTitle title="Tüm Etkinlikler" />
			</Container>
		</>
	);
};

export default EventsPage;
