import * as React from "react";
import { Button } from "react-bootstrap";

import {
  CssBaseline,
  Box,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import imgURL from "../img/ithraLib.jpg";
import "./style.css";

const studyLevels = ["Master degree", "Bachelor degree", "Diploma"];
const programs = ["Computer Science", "information System", "Finance"];
const faculties = ["Computer and Information Sciences", "Business"];
const steps = ["Personal information", "Graduate programinformation"];
export default function GraduateProgram() {
  const [studyLevel, setStudyLevel] = React.useState("");
  const [program, setProgram] = React.useState("");
  const [faculty, setFaculty] = React.useState("");
  // console.log(studyLevel);
  // console.log(program);

  //Temp: to allow navigate through frontend
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/student-dashboard");
  };

  const updateStudyLevel = (event) => {
    setStudyLevel(event.target.value);
  };
  const updateProgram = (event) => {
    setProgram(event.target.value);
  };
  const UpdateFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ studyLevel, program, faculty });
    setTimeout(() => {
      alert(JSON.stringify({ studyLevel, program, faculty }));
    }, 400);
    navigate("/student-dashboard");
  };

  return (
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
          <div className="top-space">
            <h1 className="text-center fw-bold">Graduate Program</h1>
            <p className="text-center">Fill your path information</p>
          </div>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={1} alternativeLabel>
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
            <FormControl
              variant="standard"
              className="form-control text-wh"
              fullWidth
            >
              <InputLabel id="demo-simple-select-standard-label">
                Level of study
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={studyLevel}
                onChange={updateStudyLevel}
                label="Level of study"
                required
              >
                {studyLevels.map((s, index) => (
                  <MenuItem key={index} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="standard" className="form-control text-wh">
              <InputLabel id="demo-simple-select-standard-label">
                Program
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={program}
                onChange={updateProgram}
                label="Program"
              >
                {programs.map((s, index) => (
                  <MenuItem key={index} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="standard" className="form-control text-wh">
              <InputLabel id="demo-simple-select-standard-label">
                Faculty
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={faculty}
                onChange={UpdateFaculty}
                label="Faculty"
              >
                {faculties.map((s, index) => (
                  <MenuItem key={index} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              variant="primary"
              size="lg"
              onClick={handleSubmit}
              className="form-control btn-color  top-space"
            >
              Register
            </Button>
            <Grid container></Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
    // </ThemeProvider>
  );
}
