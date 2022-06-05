import React from "react";

import { Container, Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import { LibraryBooks } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks";
import AlertPopup from "../../components/AlertPopup";
import Loading from "../../components/Loading";

const NewsPage = () => {
	const navigate = useNavigate();

	const navigateToDetail = (newsItem) => {
		navigate(`/news/${newsItem.id}`);
	};

	const { loading, error, value, setError } = useFetch("/announcements");

	return (
		<>
			<Navbar />

			<Container maxWidth="xl">
				<PageTitle title="Tüm Haberler" />
			</Container>
			{error && <AlertPopup error={error.message} handleClose={() => setError(false)} />}
			<Loading loading={loading} />
			{value && (
				<Container maxWidth="xl">
					<>
						{value.length > 0 ? (
							<List
								sx={{
									width: "100%",
									bgcolor: "background.paper",
								}}
							>
								{value.map((newsItem, index) => (
									<React.Fragment key={newsItem.id}>
										<ListItem
											alignItems="flex-start"
											sx={{ "&:hover": { cursor: "pointer" } }}
											onClick={() => navigateToDetail(newsItem)}
										>
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
															{newsItem.createdAt}
														</Typography>
													</React.Fragment>
												}
											/>
										</ListItem>
										{index !== value.length - 1 && (
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
			)}
		</>
	);
};

export default NewsPage;
