import * as React from "react";
import { Button } from "react-bootstrap";
import {
  CssBaseline,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Box,
  Grid,
  InputLabel,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

import { useFormik } from "formik";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import { useNavigate } from "react-router-dom";
//Local file upload
import imgURL from "../img/ithraLib.jpg";
import ImgUpload from "../Components/imgUpload";
import { RegisterSchema } from "./RegisterSchema";
import "./style.css";

const initialValues = {
  first: "",
  last: "",
  email: "",
  password: "",
  repassword: "",
};
const today = dayjs("2008-12-31");
const minDate = dayjs("1980-01-01");

const steps = ["Personal information", "Graduate programinformation"];
export default function Register() {
  const navigate = useNavigate();
  const navigateToGraduate = () => {
    navigate("/graduate-program");
  };
  const [uploadImageURL, setUploadImageURL] = React.useState("");
  const [startDate, setStartDate] = React.useState("");

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        navigateToGraduate();
      }, 400);
    },
  });

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
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
            <div className="">
              <h1 className="text-center fw-bold">Welcome to Thiqah!</h1>
              <p className="text-center">Register new studemt</p>
            </div>
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                id="first"
                name="first"
                label="First name"
                variant="standard"
                className="form-control text-wh"
                value={values.first}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.first && touched.first ? (
                <small className="text-danger mt-1">{errors.first}</small>
              ) : null}

              <TextField
                id="last"
                name="last"
                label="Last Name"
                variant="standard"
                className="form-control text-wh "
                value={values.last}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.last && touched.last ? (
                <small className="text-danger mt-1">{errors.last}</small>
              ) : null}

              <TextField
                id="email"
                name="email"
                label="Email"
                variant="standard"
                className="form-control text-wh"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <small className="text-danger mt-1">{errors.email}</small>
              ) : null}

              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                className="form-control text-wh"
              >
                <DatePicker
                  label="Birth date"
                  variant="filled"
                  id="dateV"
                  name="date"
                  className="form-control text-wh"
                  maxDate={today}
                  minDate={minDate}
                  onChange={(date) => setStartDate(date)}
                  onBlur={handleBlur}
                  slotProps={{
                    textField: {
                      variant: "filled",
                      className: "text-wh",
                    },
                  }}
                />
              </LocalizationProvider>

              <InputLabel>Photo</InputLabel>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "inherit",
                }}
              >
                <ImgUpload
                  className="form-control text-wh "
                  setImageUrl={setUploadImageURL}
                  imageUrl={uploadImageURL}
                />
              </div>

              <TextField
                id="password"
                name="password"
                label="Password"
                variant="standard"
                className="form-control text-wh"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
              />
              {errors.password && touched.password ? (
                <small className="text-danger mt-1">{errors.password}</small>
              ) : null}

              <TextField
                id="repassword"
                name="repassword"
                label="Confirm Password"
                variant="standard"
                className="form-control text-wh"
                value={values.repassword}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
              />
              {errors.repassword && touched.repassword ? (
                <small className="text-danger mt-1">{errors.repassword}</small>
              ) : null}

              <Button
                variant="primary"
                size="lg"
                onClick={handleSubmit}
                className="form-control btn-color top-space"
              >
                Next
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/" variant="body2">
                    Already have account?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
