import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import courses from "../../Courses/mock/courses.json";

const CourseAnnouncements = () => {
	const { id } = useParams();

	const course = React.useMemo(() => courses.find((c) => parseInt(c.id) === parseInt(id)), [id]);
	return (
		<>
			{course?.announcements?.length > 0 ? (
				<List
					sx={{
						width: "100%",
						bgcolor: "background.paper",
					}}
				>
					{course.announcements.map((announcement, index) => (
						<React.Fragment key={announcement.id}>
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<Avatar
										alt={announcement.announcerFullName}
										src={announcement.announcerImgURL}
									/>
								</ListItemAvatar>
								<ListItemText
									primary={announcement.title}
									secondary={
										<React.Fragment>
											<Typography
												sx={{ display: "inline" }}
												component="span"
												variant="body2"
												color="text.primary"
											>
												{announcement.announcerFullName}
											</Typography>
											{" — "}
											{announcement.content}

											<Typography
												variant="subtitle2"
												component="span"
												sx={{ mt: 1, display: "block" }}
											>
												{announcement.date}
											</Typography>
										</React.Fragment>
									}
								/>
							</ListItem>
							{index !== course.announcements.length - 1 && (
								<Divider variant="inset" component="li" />
							)}
						</React.Fragment>
					))}
				</List>
			) : (
				<Typography variant="body1">Bu ders için duyuru bulunmamaktadır.</Typography>
			)}
		</>
	);
};

export default CourseAnnouncements;
