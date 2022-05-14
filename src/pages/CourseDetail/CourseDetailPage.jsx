import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
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
		</>
	);
};

export default CourseDetailPage;
