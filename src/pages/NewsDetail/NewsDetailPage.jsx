import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import AlertPopup from "../../components/AlertPopup";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import { useFetch } from "../../hooks";

const EventDetailPage = () => {
	let { id } = useParams();

	const { loading, error, value, setError } = useFetch(`/announcements/${id}`, {}, [id]);

	return (
		<>
			<Navbar />

			{error && <AlertPopup error={error.message} handleClose={() => setError(false)} />}
			<Loading loading={loading} />

			{value && (
				<Container maxWidth="xl">
					<PageTitle title={value.title} />
					<Typography variant="subtitle1" sx={{ mt: -2, mb: 1 }}>
						{value.createdAt}
					</Typography>
					<Typography variant="body1" sx={{ mb: 1, fontStyle: "italic" }}>
						{value.subtitle}
					</Typography>
					<Divider />
					<img src={value.imgURL} alt={value.imgAlt} style={{ marginTop: 20 }} />
					<Typography variant="body1" sx={{ mb: 1, mt: 1 }}>
						{value.content}
					</Typography>
				</Container>
			)}
		</>
	);
};

export default EventDetailPage;
