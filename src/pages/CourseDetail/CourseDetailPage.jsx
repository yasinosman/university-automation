import React from "react";
import { Container, Grid } from "@mui/material";
import { useParams, Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import courses from "../Courses/mock/courses.json";

const CourseDetailPage = () => {
	let { id } = useParams();

	const course = React.useMemo(() => courses.find((c) => parseInt(c.id) === parseInt(id)), [id]);

	return (
		<>
			<Navbar />

			<Container maxWidth="xl">
				<PageTitle title={course.title} />
			</Container>

			<Container maxWidth="xl">
				<Grid container spacing={5}>
					<Grid item xs={4}></Grid>
					<Grid item xs={8}>
						<Outlet />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default CourseDetailPage;
