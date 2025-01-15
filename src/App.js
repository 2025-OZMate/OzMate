import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "../src/pages/Login/Login";
import Test from "../src/pages/Test";
import Home from "../src/pages/Home";
import SituationSelect from "./pages/Practice/SituationSelect";
import Mypage from "../src/pages/Mypage";
import BottomNav from "../src/components/Details/BottomNav";
import Quiz from "./pages/Practice/Quiz";
import Speak from "./pages/Practice/Speak";
import CorrectPage from "./pages/Practice/CorrectPage";
import InfoDetail from "./pages/MainHome/InfoDetail";
import BookMark from "./pages/Mypage/BookMark";
import Language from "./pages/Mypage/Language";
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
  const hideBottomNavPaths = ["/Login", "/Quiz", "/SituationSelect", "/CorrectPage", "/InfoDetail", "/BookMark", "/Language"];

  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/SituationSelect" element={<SituationSelect />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Speak" element={<Speak />} />
        <Route path="/CorrectPage" element={<CorrectPage />} />
        <Route path="/InfoDetail" element={<InfoDetail />} />
        <Route path="/BookMark" element={<BookMark />} />
        <Route path="/Language" element={<Language />} />
      </Routes>
      {!hideBottomNavPaths.includes(location.pathname) && <BottomNav />}
    </>
  );
};

export default App;
