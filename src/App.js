import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "../src/Pages/Register";
import LogIn from "../src/Pages/LogIn";
import GraduateProgram from "./Pages/GraduateProgram";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/graduate-program" element={<GraduateProgram />}></Route>
          <Route path="/student-dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
