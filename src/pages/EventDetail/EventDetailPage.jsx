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

	const { loading, error, value: event, setError } = useFetch(`/events/${id}`, {}, [id]);

	return (
		<>
			<Navbar />

			{error && <AlertPopup error={error.message} handleClose={() => setError(false)} />}
			<Loading loading={loading} />

			{event && (
				<Container maxWidth="xl">
					<PageTitle title={event.title} />
					<Typography variant="subtitle1" sx={{ mt: -2, mb: 1 }}>
						{event.createdAt}
					</Typography>
					<Typography variant="body1" sx={{ mb: 1, fontStyle: "italic" }}>
						{event.subtitle}
					</Typography>
					<Divider />
					<img src={event.imgURL} alt={event.imgAlt} style={{ marginTop: 20 }} />
					<Typography variant="body1" sx={{ mb: 1, mt: 1 }}>
						{event.content}
					</Typography>
				</Container>
			)}
		</>
	);
};

export default EventDetailPage;
