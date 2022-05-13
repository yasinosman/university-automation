import { AccountCircle, Logout } from "@mui/icons-material";
// eslint-disable-next-line no-unused-vars
import { ListItemIcon, Menu, MenuItem, Typography, MenuProps } from "@mui/material";
import React from "react";
import UserCard from "../UserCard";

/**
 *
 * @param {Object} props
 * @param {MenuProps.anchorEl} props.anchorEl
 * @param {Function} props.handleClose
 * @param {Array<{link: String, name: String}>} props.settings
 * @param {(setting: {link: String, name: String}) => void} props.onSettingItemClick
 */
const SettingsMenu = ({ anchorEl, handleClose, settings, onSettingItemClick }) => {
	return (
		<Menu
			sx={{ mt: "45px" }}
			id="menu-appbar"
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={Boolean(anchorEl)}
			onClose={handleClose}
		>
			<UserCard />
			{settings.map((page) => (
				<MenuItem key={page.link} onClick={() => onSettingItemClick(page)}>
					<ListItemIcon>
						<AccountCircle fontSize="small" />
					</ListItemIcon>
					<Typography textAlign="center">{page.name}</Typography>
				</MenuItem>
			))}
			<MenuItem onClick={() => alert("Logged out")}>
				<ListItemIcon>
					<Logout fontSize="small" />
				</ListItemIcon>
				<Typography textAlign="center">Çıkış</Typography>
			</MenuItem>
		</Menu>
	);
};

export default SettingsMenu;
