import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import AlertPopup from "../../../components/AlertPopup";
import Loading from "../../../components/Loading";
import { useAuth } from "../../../context/Authentication";

const ProfileSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, "İsim en az 2 karakter olmalıdır")
		.max(50, "İsim en fazla 50 karakter olmalıdır")
		.required("İsim boş bırakılamaz"),
	lastName: Yup.string()
		.min(2, "Soyisim en az 2 karakter olmalıdır.")
		.max(50, "Soyisim en fazla 50 karakter olmalıdır")
		.required("Soyisim boş bırakılamaz"),
	email: Yup.string().email("Lütfen geçerli bir e-posta adresi giriniz").required("E-posta adresi boş bırakılamaz"),
});

const EditProfileForm = () => {
	const { user, setUser } = useAuth();

	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);

	const formik = useFormik({
		initialValues: user,
		validationSchema: ProfileSchema,
		onSubmit: async (values) => {
			try {
				const res = await fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
					method: "patch",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ firstName: values.firstName, lastName: values.lastName }),
				});

				if (!res.ok) {
					setError("Profil güncellenirken bir hata oluştu, lütfen daha sonra tekrar deneyin.");
					setLoading(false);
					return;
				}

				const data = await res.json();

				console.log({ data });

				window.localStorage.setItem("user", JSON.stringify(data));
				setUser(data);
			} catch (error) {
				setError("Profil güncellenirken bir hata oluştu, lütfen daha sonra tekrar deneyin.");
			} finally {
				setLoading(false);
			}
		},
	});

	const areAllFieldsUnchanged = React.useMemo(() => {
		return (
			user.firstName === formik.values.firstName &&
			user.lastName === formik.values.lastName &&
			user.email === formik.values.email
		);
	}, [formik.values, user]);

	return (
		<form onSubmit={formik.handleSubmit}>
			{error && <AlertPopup error={error} handleClose={() => setError(null)} />}
			<Loading loading={loading} />

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					"& .MuiTextField-root": { marginBottom: 2 },
				}}
			>
				<Typography variant="overline" display="block" gutterBottom>
					Profil Güncelleme
				</Typography>

				<TextField
					id="firstName"
					name="firstName"
					label="Ad"
					variant="outlined"
					value={formik.values.firstName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.firstName && Boolean(formik.errors.firstName)}
					helperText={formik.touched.firstName && formik.errors.firstName}
				/>
				<TextField
					id="lastName"
					name="lastName"
					label="Soyad"
					variant="outlined"
					value={formik.values.lastName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.lastName && Boolean(formik.errors.lastName)}
					helperText={formik.touched.lastName && formik.errors.lastName}
				/>
				<TextField
					id="email"
					name="email"
					label="E-Posta Adresi"
					variant="outlined"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
					disabled
				/>
				<Button color="primary" variant="contained" type="submit" disabled={areAllFieldsUnchanged}>
					Bilgileri Güncelle
				</Button>
			</Box>
		</form>
	);
};

export default EditProfileForm;
