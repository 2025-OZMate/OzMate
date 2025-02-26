import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Index from "./pages";
import Test from "../src/pages/Test";
import Home from "../src/pages/Home";
import Mypage from "../src/pages/Mypage";
import BottomNav from "../src/components/Details/BottomNav";
import Translation from "./pages/Practice/Translation";
import Quiz from "./pages/Practice/Quiz";
import InfoDetail from "./pages/MainHome/InfoDetail";
import BookMark from "./pages/Mypage/BookMark";
import DetailInfo from "./components/Home/DetailInfo";
import Language from "./pages/Mypage/Language";
import reset from "../src/styles/Style.module.css";


import Register from "./pages/Login/Register";
import Login from "./pages/Login/Logins"

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
    "/",
    "/Login",
    "/register",
    "/Quiz",
    "/SituationSelect",
    "/CorrectPage",
    "/InfoDetail",
    "/BookMark",
    "/Language",
    "/Index",
    "/Translation",
  ];

  const shouldHideBottomNav = hideBottomNavPaths.includes(location.pathname) || location.pathname.startsWith("/detail/");

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/detail/:id" element={<DetailInfo />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/MyPage" element={<Mypage />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Translation" element={<Translation />} />
        <Route path="/InfoDetail" element={<InfoDetail />} />
        <Route path="/BookMark" element={<BookMark />} />
        <Route path="/Language" element={<Language />} />
      </Routes>

      {!shouldHideBottomNav && <BottomNav />}
    </>
  );
};

export default App;
