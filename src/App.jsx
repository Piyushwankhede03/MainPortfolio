import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import About from "./pages/About"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2 style={{ padding: "2rem" }}><Home /></h2>} />
        <Route path="/projects" element={<h2 style={{ padding: "2rem" }}>< Projects /></h2>} />
        <Route path="/skills" element={<h2 style={{ padding: "2rem" }}><Skills /></h2>} />
        <Route path="/Resume" element={<h2 style={{ padding: "2rem" }}> <Resume /> </h2>} />
        <Route path="/about" element={<h2 style={{ padding: "2rem" }}> <About /> </h2>} />
        <Route path="/contact" element={<h2 style={{ padding: "2rem" }}> <Contact /> </h2>} />
      </Routes>
      <Footer />
    </>
  );
}