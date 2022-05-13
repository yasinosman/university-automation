import React from "react";
import { Container, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import PageTitle from "../../../components/PageTitle";
import DataCard from "./DataCard";
import events from "../mock/events.json";

const Events = () => {
	return (
		<>
			<Container maxWidth="xl">
				<PageTitle title="Etkinlikler" />

				<Grid container spacing={5}>
					{events.map((event) => (
						<Grid key={event.id} item xs={12} sm={6} md={4} lg={3}>
							<DataCard
								key={event.id}
								id={event.id}
								title={event.title}
								subtitle={event.subtitle}
								imgURL={event.imgURL}
								imgAlt={event.imgAlt}
								date={event.date}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
			<Container maxWidth="xl" sx={{ mb: 5, mt: 2 }}>
				<Link component={RouterLink} to="/account">
					Tüm Etkinlikler
				</Link>
			</Container>
		</>
	);
};

export default Events;
