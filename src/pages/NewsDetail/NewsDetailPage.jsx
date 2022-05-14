import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import news from "../Home/mock/news.json";

const NewsDetailPage = () => {
	let { id } = useParams();

	const newsItem = React.useMemo(() => news.find((n) => parseInt(n.id) === parseInt(id)), [id]);

	return (
		<>
			<Navbar />

			<Container maxWidth="xl">
				<PageTitle title={newsItem.title} />
			</Container>
		</>
	);
};

export default NewsDetailPage;
