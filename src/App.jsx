import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Downloads from "./pages/Downloads";
import Pnf from "./pages/Pnf";
import ResumeSteps from "./pages/ResumeSteps";
import UserForm from "./pages/UserForm";
import ViewResume from "./pages/ViewResume";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<ResumeSteps />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/resume/:id/view" element={<ViewResume />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="*" element={<Pnf />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
