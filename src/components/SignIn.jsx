import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
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

// custom import //
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
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
      </Link>{" "} */}
      Rahulfordev {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const { singIn, gitHubLogin, getGoogleLogin, getMicrosoftLogin, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // Emil & Password
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");

    singIn(email, password)
      .then((res) => {
        toast.success("login successfull");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  // Google
  const handleGoogleLogin = () => {
    getGoogleLogin()
      .then((result) => {
        // console.log(result.user);
        const userInfo = result.user;
        setUser(userInfo);
        toast("login Successfull");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  // Github
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

  // Microsoft
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="/password_reset" variant="body2">
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
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
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
