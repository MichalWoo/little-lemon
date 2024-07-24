import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Chicago from "./components/Chicago";
import Specials from "./components/Specials";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/order-online" element={<Specials />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
