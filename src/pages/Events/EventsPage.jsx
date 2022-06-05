import React from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/PageTitle";
import { Avatar, Divider, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { LibraryBooks } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks";
import AlertPopup from "../../components/AlertPopup";
import Loading from "../../components/Loading";

const EventsPage = () => {
	const navigate = useNavigate();

	const navigateToEventDetail = (event) => {
		navigate(`/events/${event.id}`);
	};

	const { loading, error, value: events, setError } = useFetch("/events");

	return (
		<>
			<Navbar />

			<Container maxWidth="xl">
				<PageTitle title="Tüm Etkinlikler" />
			</Container>

			{error && <AlertPopup error={error.message} handleClose={() => setError(false)} />}
			<Loading loading={loading} />

			{events && (
				<Container maxWidth="xl">
					<>
						{events.length > 0 ? (
							<List
								sx={{
									width: "100%",
									bgcolor: "background.paper",
								}}
							>
								{events.map((event, index) => (
									<React.Fragment key={event.id}>
										<ListItem
											alignItems="flex-start"
											sx={{ "&:hover": { cursor: "pointer" } }}
											onClick={() => navigateToEventDetail(event)}
										>
											<ListItemAvatar>
												<Avatar>
													<LibraryBooks />
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												primary={event.title}
												secondary={
													<React.Fragment>
														{event.subtitle}

														<Typography
															variant="subtitle2"
															component="span"
															sx={{ mt: 1, display: "block" }}
														>
															{event.createdAt}
														</Typography>
													</React.Fragment>
												}
											/>
										</ListItem>
										{index !== events.length - 1 && (
											<Divider variant="inset" component="li" />
										)}
									</React.Fragment>
								))}
							</List>
						) : (
							<Typography variant="body1">Yeni etkinlikler bulunmamaktadır</Typography>
						)}
					</>
				</Container>
			)}
		</>
	);
};

export default EventsPage;
