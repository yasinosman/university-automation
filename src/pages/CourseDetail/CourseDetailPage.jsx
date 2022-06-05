import React from "react";
import { Container, Grid, Link } from "@mui/material";
import { useParams, Outlet, NavLink as RouterLink } from "react-router-dom";

import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import { useFetch } from "../../hooks";
import AlertPopup from "../../components/AlertPopup";
import Loading from "../../components/Loading";

const CourseDetailPage = () => {
	const { id } = useParams();

	const { loading, error, value: course, setError } = useFetch(`/courses/${id}`, {}, [id]);

	return (
		<>
			<Navbar />

			{error && <AlertPopup error={error.message} handleClose={() => setError(false)} />}
			<Loading loading={loading} />

			{course && (
				<>
					<Container maxWidth="xl">
						<PageTitle title={course.title} />
					</Container>

					<Container maxWidth="xl">
						<Grid container spacing={0}>
							<Grid
								item
								xs={3}
								sx={{
									display: "flex",
									flexDirection: "column",
									"> .active": { fontWeight: "bold" },
								}}
							>
								<Link component={RouterLink} to="announcements" sx={{ mb: 1 }}>
									Duyurular
								</Link>
								<Link component={RouterLink} to="assignments" sx={{ mb: 1 }}>
									Ödevler
								</Link>
							</Grid>
							<Grid item xs={9}>
								<Outlet />
							</Grid>
						</Grid>
					</Container>
				</>
			)}
		</>
	);
};

export default CourseDetailPage;
