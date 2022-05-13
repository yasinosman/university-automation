import { Container, Typography } from "@mui/material";
import React from "react";

/**
 *  Renders a page title
 * @param {Object} props
 * @param {String} props.title - Page title
 */
const PageTitle = ({ title }) => {
	return (
		<Container maxWidth="xl" sx={{ paddingTop: 5 }}>
			<Typography variant="h4" component="h1" gutterBottom>
				{title}
			</Typography>
		</Container>
	);
};

export default PageTitle;
