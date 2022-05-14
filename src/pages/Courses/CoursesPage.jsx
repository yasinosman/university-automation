import { Container } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import CoursesTable from "./components/CoursesTable";

const CoursesPage = () => {
	return (
		<>
			<Navbar />

			<Container maxWidth="xl">
				<PageTitle title="Dersler" />
			</Container>

			<Container maxWidth="xl">
				<CoursesTable />
			</Container>
		</>
	);
};

export default CoursesPage;
