import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import events from "../Home/mock/events.json";

const EventDetailPage = () => {
	let { id } = useParams();

	const event = React.useMemo(() => events.find((e) => parseInt(e.id) === parseInt(id)), [id]);

	return (
		<>
			<Navbar />

			<Container maxWidth="xl">
				<PageTitle title={event.title} />
				<Typography variant="subtitle1" sx={{ mt: -2, mb: 1 }}>
					{event.date}
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
		</>
	);
};

export default EventDetailPage;
