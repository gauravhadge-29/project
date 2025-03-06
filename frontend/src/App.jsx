import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import Creativecorner from "./Creativecorner/Creativecorner";
export default function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/uploads" element={<Creativecorner />} />
        </Routes>
       
      </div>
    </>
  );
}
