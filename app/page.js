"use client";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Dashboard from "./components/dashboard";
import Submissions from "./components/submissions";
import Stories from "./components/stories";
import Login from "./components/login";

export default function Home() {
  // MAIN COMPONENTS
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
