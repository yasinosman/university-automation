import React from "react";

import { Container,Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import news from "../Home/mock/news.json";
import { LibraryBooks } from "@mui/icons-material";

const NewsPage = () => {
	return (
		<>
			<Navbar />

			<Container maxWidth="xl">
				<PageTitle title="Tüm Haberler" />
			</Container>
			<Container maxWidth="xl">
			<>
			{news.length > 0 ? (
				<List
					sx={{
						width: "100%",
						bgcolor: "background.paper",
					}}
				>
					{news.map((newsItem, index) => (
						<React.Fragment key={newsItem.id}>
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<Avatar>
										<LibraryBooks />
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={newsItem.title}
									secondary={
										<React.Fragment>
											{newsItem.subtitle}

											<Typography
												variant="subtitle2"
												component="span"
												sx={{ mt: 1, display: "block" }}
											>
											 {newsItem.date}
											</Typography>
											
										</React.Fragment>
									}
								/>
							</ListItem>
							{index !== news.length - 1 && (
								<Divider variant="inset" component="li" />
							)}
						</React.Fragment>
					))}
				</List>
			) : (
				<Typography variant="body1">Yeni haber bulunmamaktadır</Typography>
			)}
		</>
			</Container>
		</>
	);
};

export default NewsPage;
