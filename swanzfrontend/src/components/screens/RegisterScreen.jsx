import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Grid, Typography } from "@mui/material";
import FormContainer from "../FormContainer";
import Swal from "sweetalert2";
import { register, googleAuthenticate } from "../../redux/actions/userActions";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GoogleLogin } from "@react-oauth/google";

const validationSchema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  re_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegisterScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      re_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(
        register(
          values.first_name,
          values.last_name,
          values.email,
          values.password,
          values.re_password
        )
      );
      Swal.fire({
        title: "Great job!",
        text: `Welcome ${values.first_name}, you have registered successfully`,
        icon: "success",
      });
      navigate("/login");
    },
  });

  const handleGoogleSuccess = async (response) => {
    try {
      const { credential } = response;
      await dispatch(googleAuthenticate(credential));
      Swal.fire({
        title: "Great job!",
        text: "You have logged in successfully with Google",
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      console.error("Google authentication failed", error);
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <FormContainer title="Register">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="first_name"
              name="first_name"
              label="First Name"
              variant="outlined"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              error={
                formik.touched.first_name && Boolean(formik.errors.first_name)
              }
              helperText={formik.touched.first_name && formik.errors.first_name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="last_name"
              name="last_name"
              label="Last Name"
              variant="outlined"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              helperText={formik.touched.last_name && formik.errors.last_name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="re_password"
              name="re_password"
              label="Confirm Password"
              type="password"
              variant="outlined"
              value={formik.values.re_password}
              onChange={formik.handleChange}
              error={
                formik.touched.re_password && Boolean(formik.errors.re_password)
              }
              helperText={
                formik.touched.re_password && formik.errors.re_password
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Already a customer? <Link to="/login">Login</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
              Or continue with
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
              <Grid item>
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onFailure={(error) => console.log(error)}
                  buttonText="Google"
                  render={(renderProps) => (
                    <Button
                      variant="outlined"
                      startIcon={<GoogleIcon />}
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      fullWidth
                      sx={{
                        color: "white",
                        backgroundColor: "#4285F4",
                        borderColor: "#4285F4",
                        "&:hover": {
                          backgroundColor: "#357AE8",
                          borderColor: "#357AE8",
                        },
                      }}
                    >
                      Google
                    </Button>
                  )}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  onClick={() => handleSocialLogin("Facebook")}
                  fullWidth
                  sx={{
                    color: "white",
                    backgroundColor: "#3b5998",
                    borderColor: "#3b5998",
                    "&:hover": {
                      backgroundColor: "#2d4373",
                      borderColor: "#2d4373",
                    },
                  }}
                >
                  Facebook
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  onClick={() => handleSocialLogin("GitHub")}
                  fullWidth
                  sx={{
                    color: "white",
                    backgroundColor: "#333",
                    borderColor: "#333",
                    "&:hover": {
                      backgroundColor: "#24292e",
                      borderColor: "#24292e",
                    },
                  }}
                >
                  GitHub
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  startIcon={<TwitterIcon />}
                  onClick={() => handleSocialLogin("Twitter")}
                  fullWidth
                  sx={{
                    color: "white",
                    backgroundColor: "#1DA1F2",
                    borderColor: "#1DA1F2",
                    "&:hover": {
                      backgroundColor: "#0d95e8",
                      borderColor: "#0d95e8",
                    },
                  }}
                >
                  Twitter
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </FormContainer>
  );
};

export default RegisterScreen;
