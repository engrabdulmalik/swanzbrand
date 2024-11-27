import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import FormContainer from "../FormContainer";
import {
  Box,
  Button,
  TextField,
  Alert,
  Typography,
  Stack,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo, loading } = userLogin;

  useEffect(() => {
    if (userInfo) {
      Swal.fire({
        title: "Welcome",
        text: "You have logged in successfully",
        icon: "success",
      }).then(() => {
        navigate("/");
      });
    }
  }, [navigate, userInfo]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }
  }, [error]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      await dispatch(login(values.email, values.password));
    },
  });

  const handleOAuthLogin = (provider) => {
    // Implement OAuth login logic here
    Swal.fire({
      title: "OAuth Login",
      text: `Login with ${provider} is not implemented yet.`,
      icon: "info",
    });
  };

  return (
    <FormContainer title="Login">
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 500,
          mx: "auto",
          mt: 4,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        {error && (
          <Alert severity="error" sx={{ width: "100%" }}>
            {error}
          </Alert>
        )}
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ marginBottom: 2, fontSize: "1.2rem" }}
          InputProps={{ style: { fontSize: "1.2rem" } }}
          InputLabelProps={{ style: { fontSize: "1.2rem" } }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ marginBottom: 2, fontSize: "1.2rem" }}
          InputProps={{ style: { fontSize: "1.2rem" } }}
          InputLabelProps={{ style: { fontSize: "1.2rem" } }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          startIcon={<PersonIcon />}
          sx={{ mt: 2, padding: "12px 24px", fontSize: "1.2rem" }}
        >
          Login
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          New Customer? <Link to="/register">Register Here</Link>
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Forgot Password? <Link to="/reset-password">Reset Password</Link>
        </Typography>

        <Stack spacing={2} sx={{ mt: 4, width: "100%" }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<GoogleIcon />}
            onClick={() => handleOAuthLogin("Google")}
            sx={{ fontSize: "1.2rem" }}
          >
            Continue with Google
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<FacebookIcon />}
            onClick={() => handleOAuthLogin("Facebook")}
            sx={{ fontSize: "1.2rem" }}
          >
            Continue with Facebook
          </Button>
          <Button
            variant="contained"
            color="inherit"
            size="large"
            startIcon={<GitHubIcon />}
            onClick={() => handleOAuthLogin("GitHub")}
            sx={{ fontSize: "1.2rem" }}
          >
            Continue with GitHub
          </Button>
          <Button
            variant="contained"
            color="info"
            size="large"
            startIcon={<TwitterIcon />}
            onClick={() => handleOAuthLogin("Twitter")}
            sx={{ fontSize: "1.2rem" }}
          >
            Continue with Twitter
          </Button>
        </Stack>
      </Box>
    </FormContainer>
  );
};

export default LoginScreen;
