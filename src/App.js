import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Signin from "./Screen/Signin";
import Profilepage from "./Screen/Profilepage";
import Studentexam from "./Screen/Studentexam";
import Teacherexam from "./Screen/Teacherexam";
import Exampaper from "./Screen/Exampaper";
import Studentinfo from "./Screen/Studentinfo";


function App() {
  return(
    <BRouter>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/profile" element={<Profilepage />} />
        <Route exact path="/studentexam" element={<Studentexam />} />
        <Route exact path="/teacherexam" element={<Teacherexam />} />
        <Route exact path="/exampaper" element={<Exampaper />} />
        <Route exact path="/studentinfo" element={<Studentinfo />} />
    </Routes>
    </BRouter>
  );
}

export default App;
