import { Container } from "@mui/material";
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
			</Container>
		</>
	);
};

export default EventDetailPage;
