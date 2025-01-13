import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "../src/pages/Login/Login";
import Test from "../src/pages/Test";
import Home from "../src/pages/Home";
import SituationSelect from "./pages/Practice/SituationSelect";
import Mypage from "../src/pages/Mypage";
import BottomNav from "../src/components/Details/BottomNav";
import Quiz from "./pages/Practice/Quiz";
import reset from "../src/styles/Style.module.css";

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  const hideBottomNavPaths = ["/Login", "/Quiz", "/SituationSelect"];

  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/SituationSelect" element={<SituationSelect />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
      {!hideBottomNavPaths.includes(location.pathname) && <BottomNav />}
    </>
  );
};

export default App;
