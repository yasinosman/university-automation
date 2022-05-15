import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import news from "../Home/mock/news.json";

const EventDetailPage = () => {
	let { id } = useParams();

	const newsItem = React.useMemo(() => news.find((n) => parseInt(n.id) === parseInt(id)), [id]);

	return (
		<>
			<Navbar />

			<Container maxWidth="xl">
				<PageTitle title={newsItem.title} />
				<Typography variant="subtitle1" sx={{ mt: -2, mb: 1 }}>
					{newsItem.date}
				</Typography>
				<Typography variant="body1" sx={{ mb: 1, fontStyle: "italic" }}>
					{newsItem.subtitle}
				</Typography>
				<Divider />
				<img src={newsItem.imgURL} alt={newsItem.imgAlt} style={{ marginTop: 20 }} />
				<Typography variant="body1" sx={{ mb: 1, mt: 1 }}>
					{newsItem.content}
				</Typography>
			</Container>
		</>
	);
};

export default EventDetailPage;
