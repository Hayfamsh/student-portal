import * as React from "react";
import { Button } from "react-bootstrap";

import { CssBaseline, TextField, Paper, Box, Grid } from "@mui/material";

import { Link,useNavigate } from "react-router-dom";


//Local file upload
import imgURL from "../img/ithraLib.jpg";
import "./style.css";

export default function LogIn() {
  //temp: To allow navigate through frontend
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/student-dashboard");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }} className="x">
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${imgURL})`,
          backgroundRepeat: "no-repeat",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          backgroundColor: `#f6f9ff`,
          color: "#555454",
        }}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="top-space">
            <h1 className="text-center fw-bold">Sign In</h1>
          </div>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              required
              fullWidth
              variant="standard"
              id="email"
              name="email"
              label="Email"
              type="email"
              className="form-control text-wh"
              autoFocus
            />

            <TextField
              required
              fullWidth
              variant="standard"
              name="password"
              label="Password"
              type="password"
              id="password"
              className="form-control text-wh"
              autoComplete="current-password"
            />

            <Grid container>
              <Grid item xs>
                <div className="text-right">
                  <Link href="">Forgot password?</Link>
                </div>
              </Grid>
            </Grid>

            <Button
              variant="primary"
              size="lg"
              onClick={navigateToDashboard}
              className="form-control btn-color top-space"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <div className="text-center">
                  <Link to="/signup" variant="body2">
                    Don' have account? <b>Sign up</b>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
    // </ThemeProvider>
  );
}
