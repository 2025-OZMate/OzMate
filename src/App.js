import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Index from "./pages";
import Login from "../src/pages/Login/Login";
import SignUp from "../src/pages/Login/SignUp";
import Test from "../src/pages/Test";
import Home from "../src/pages/Home";
import Mypage from "../src/pages/Mypage";
import BottomNav from "../src/components/Details/BottomNav";
import Translation from "./pages/Practice/Translation";
import Quiz from "./pages/Practice/Quiz";
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
  const hideBottomNavPaths = [
    "/Login",
    "/SignUp",
    "/Quiz",
    "/SituationSelect",
    "/CorrectPage",
    "/InfoDetail",
    "/BookMark",
    "/Language",
    "/Index",
    "/Translation",
  ];

  return (
    <>
      <Routes>
        <Route path="Index" element={<Index />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/MyPage" element={<Mypage />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Translation" element={<Translation />} />
        <Route path="/InfoDetail" element={<InfoDetail />} />
        <Route path="/BookMark" element={<BookMark />} />
        <Route path="/Language" element={<Language />} />
      </Routes>
      {!hideBottomNavPaths.includes(location.pathname) && <BottomNav />}
    </>
  );
};

export default App;
