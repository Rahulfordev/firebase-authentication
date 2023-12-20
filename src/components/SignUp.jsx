/* eslint-disable no-unused-vars */
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
//
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '} */}
      Rahulfordev {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const { createUser, gitHubLogin, getGoogleLogin, getMicrosoftLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // Sign Up
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        toast("user Create Successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(error.message);
        console.log(errorCode, errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    getGoogleLogin()
      .then((result) => {
        // console.log(result.user);
        toast("login Successfull");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const gitHubHandle = () => {
    gitHubLogin()
      .then((result) => {
        // console.log(result.user);
        toast("login Successfull");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const microsoftHandle = () => {
    getMicrosoftLogin()
      .then((result) => {
        // console.log(result.user);
        toast("login Successfull");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to="/login" variant="body2">
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
            <Grid marginLeft={4} container>
              <Grid sx={{ pr: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ padding: 2, mt: 3, mb: 2 }}
                  onClick={handleGoogleLogin}
                >
                  <GoogleIcon fontSize="large" />
                </Button>
              </Grid>
              <Grid sx={{ pr: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={gitHubHandle}
                  sx={{ padding: 2, mt: 3, mb: 2 }}
                >
                  <GitHubIcon fontSize="large" />
                </Button>
              </Grid>
              <Grid sx={{ pr: 2 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ padding: 2, mt: 3, mb: 2 }}
                >
                  <FacebookIcon fontSize="large" />
                </Button>
              </Grid>
              <Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={microsoftHandle}
                  sx={{ padding: 2, mt: 3, mb: 2 }}
                >
                  <MicrosoftIcon fontSize="large" />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
