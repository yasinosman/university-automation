import { Container } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import News from "./components/News";
import Title from "./components/Title";

const HomePage = () => {
	return (
		<>
			<Navbar />

			<Container maxWidth="xl">
				<Title />
				<News />
			</Container>
		</>
	);
};

export default HomePage;
