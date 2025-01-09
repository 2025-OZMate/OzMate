import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "../src/pages/Test"
import Home from "../src/pages/Home"
import Mypage from "../src/pages/Mypage"
import BottomNav from "../src/components/Details/BottomNav"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Test" element={<Test />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Mypage" element={<Mypage />}></Route>
      </Routes>
      <BottomNav></BottomNav>

    </Router>
  );
};

export default App;


