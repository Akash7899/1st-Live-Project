import React, { Suspense, lazy } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Team from "./Components/Pages/Team";
import Contact from "./Components/Pages/Contact";
import Login from "./Components/Pages/Login";
import Portfolio from "./Components/Pages/Portfolio";
// import Home from "./Components/Pages/Home";

const Home = lazy(() => import("./Components/Pages/Home"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading.........</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Portfolio" element={<Portfolio />}></Route>
            <Route exact path="/Team" element={<Team />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exect path="/Contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
