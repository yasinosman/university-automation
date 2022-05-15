import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';




export default function VirtualizedList() {
  return (
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
	);
}
