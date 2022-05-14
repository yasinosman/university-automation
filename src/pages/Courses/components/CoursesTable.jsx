import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import courses from "../mock/courses.json";

export default function CoursesTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Ders Adı</TableCell>
						<TableCell>Kredi</TableCell>
						<TableCell>Dönem</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{courses.map((course) => (
						<TableRow
							key={course.id}
							sx={{
								"&:last-child td, &:last-child th": { border: 0 },
								"&:hover": { cursor: "pointer" },
							}}
						>
							<TableCell component="th" scope="row">
								{course.id}
							</TableCell>
							<TableCell>{course.title}</TableCell>
							<TableCell>{course.credit}</TableCell>
							<TableCell>{course.semester}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
