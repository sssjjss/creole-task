import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as yup from "yup";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import UserService from "../../services/UserService";

interface IRegisterProps {}

const userSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  mobile: yup
    .string()
    .required()
    .matches(/^[0-9]{10}$/, "Mobile Must be 10 Digit"),
  email: yup
    .string()
    .required()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/, "Enter valid Email Address"),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must have min 8 characters and 1 cap & small letter, Symbol"
    ),
  gender: yup.string().required("Gender is required"),
  //   checkbox: yup.boolean().required("Please accept the terms and conditions."),
});

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                mobile: "",
                email: "",
                password: "",
                gender: "",
                checkbox: false,
              }}
              onSubmit={(data) => {
                console.log(data);

                UserService.createUser(data)
                  .then((res) => {
                    alert("user created succesfully...");
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
              validationSchema={userSchema}
            >
              {({
                values,
                errors,
                isValid,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <Box sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            autoComplete="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            size="small"
                            name="firstName"
                            value={values?.firstName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                              touched?.firstName && errors?.firstName
                                ? true
                                : false
                            }
                            helperText={
                              touched?.firstName && errors?.firstName
                                ? errors?.firstName
                                : ""
                            }
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            size="small"
                            value={values?.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                              touched?.lastName && errors?.lastName
                                ? true
                                : false
                            }
                            helperText={
                              touched?.lastName && errors?.lastName
                                ? errors?.lastName
                                : ""
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="mobile"
                            label="Mobile"
                            name="mobile"
                            size="small"
                            autoComplete="mobile"
                            value={values?.mobile}
                            onBlur={(e) => {
                              handleBlur(e);
                            }}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            error={
                              touched?.mobile && errors?.mobile ? true : false
                            }
                            helperText={
                              touched?.mobile && errors?.mobile
                                ? errors?.mobile
                                : ""
                            }
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            size="small"
                            value={values?.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                              touched?.email && errors?.email ? true : false
                            }
                            helperText={
                              touched?.email && errors?.email
                                ? errors?.email
                                : ""
                            }
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <FormControl
                            size="small"
                            fullWidth
                            required
                            error={
                              touched?.gender && errors?.gender ? true : false
                            }
                          >
                            <FormLabel id="gender">Gender</FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="gender-radio-buttons-group-label"
                              name="gender"
                              value={values?.gender}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                value="male"
                                control={<Radio size="small" />}
                                label="Male"
                              />
                              <FormControlLabel
                                value="female"
                                control={<Radio size="small" />}
                                label="Female"
                              />
                              <FormControlLabel
                                value="other"
                                control={<Radio size="small" />}
                                label="Other"
                              />
                            </RadioGroup>

                            <FormHelperText>
                              {touched?.gender && errors?.gender
                                ? errors?.gender
                                : ""}
                            </FormHelperText>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            size="small"
                            autoComplete="new-password"
                            value={values?.password}
                            onChange={handleChange}
                            onBlur={(e) => {
                              handleBlur(e);
                            }}
                            error={
                              touched?.password && errors?.password
                                ? true
                                : false
                            }
                            helperText={
                              touched?.password && errors?.password
                                ? errors?.password
                                : ""
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                color="primary"
                                id="signUpCheckbox"
                                name="checkbox"
                                value={values?.checkbox}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                // checked={signUpCheckbox}
                              />
                            }
                            label="I Accept the terms and conditions."
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        id="sign-in-button"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={!values?.checkbox}
                      >
                        Sign Up
                      </Button>
                    </Box>
                  </form>
                );
              }}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;
