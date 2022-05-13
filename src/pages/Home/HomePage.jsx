import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const HomePage = () => {
	return (
		<>
			<Navbar />
			<nav>
				<Link to="/about">About</Link>
			</nav>
		</>
	);
};

export default HomePage;
