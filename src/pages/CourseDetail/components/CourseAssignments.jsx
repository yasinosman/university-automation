import { LibraryBooks } from "@mui/icons-material";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import AlertPopup from "../../../components/AlertPopup";
import Loading from "../../../components/Loading";
import { useFetch } from "../../../hooks";

const CourseAssignments = () => {
	const { id } = useParams();

	const { loading, error, value: course, setError } = useFetch(`/courses/${id}`, {}, [id]);

	return (
		<>
			{error && <AlertPopup error={error.message} handleClose={() => setError(false)} />}
			<Loading loading={loading} />

			{course && (
				<>
					{course?.assignments?.length > 0 ? (
						<List
							sx={{
								width: "100%",
								bgcolor: "background.paper",
							}}
						>
							{course.assignments.map((assignment, index) => (
								<React.Fragment key={assignment.id}>
									<ListItem alignItems="flex-start">
										<ListItemAvatar>
											<Avatar>
												<LibraryBooks />
											</Avatar>
										</ListItemAvatar>
										<ListItemText
											primary={assignment.title}
											secondary={
												<React.Fragment>
													{assignment.description}

													<Typography
														variant="subtitle2"
														component="span"
														sx={{ mt: 1, display: "block" }}
													>
														Son Teslim Tarihi: {assignment.deadline}
													</Typography>
													<Typography
														variant="subtitle2"
														component="span"
														sx={{ display: "block" }}
													>
														{assignment.points} Puan
													</Typography>
												</React.Fragment>
											}
										/>
									</ListItem>
									{index !== course.assignments.length - 1 && (
										<Divider variant="inset" component="li" />
									)}
								</React.Fragment>
							))}
						</List>
					) : (
						<Typography variant="body1">Bu ders için ödev bulunmamaktadır.</Typography>
					)}
				</>
			)}
		</>
	);
};

export default CourseAssignments;
