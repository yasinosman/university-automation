import React from "react";
import { Container, Grid } from "@mui/material";
import PageTitle from "../../../components/PageTitle";
import DataCard from "./DataCard";
import news from "../mock/news.json";

const News = () => {
	return (
		<Container maxWidth="xl">
			<PageTitle title="Haberler" />

			<Grid container spacing={5}>
				{news.map((newsItem) => (
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<DataCard
							key={newsItem.id}
							id={newsItem.id}
							title={newsItem.title}
							subtitle={newsItem.subtitle}
							imgURL={newsItem.imgURL}
							imgAlt={newsItem.imgAlt}
							date={newsItem.date}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default News;
