import React from "react";
import { Container } from "@mui/material";

import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";

const NewsPage = () => {
	return (
		<>
			<Navbar />

			<Container maxWidth="xl">
				<PageTitle title="Tüm Haberler" />
			</Container>
		</>
	);
};

export default NewsPage;
