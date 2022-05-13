import { Avatar, Paper, Typography } from "@mui/material";
import React from "react";

const UserCard = () => {
	return (
		<Paper elevation={0} sx={{ paddingTop: 2, paddingBottom: 2, paddingLeft: 5, paddingRight: 5 }}>
			<Avatar
				alt="Yasin Osman"
				src="https://picsum.photos/100"
				sx={{
					marginBottom: 2,
					marginLeft: "auto",
					marginRight: "auto",
					width: 100,
					height: 100,
				}}
			/>
			<Typography variant="h6" component="p" align="center">
				Yasin Osman
			</Typography>
			<Typography variant="body1" component="p" align="center">
				yasinosman10@gmail.com
			</Typography>
		</Paper>
	);
};

export default UserCard;
