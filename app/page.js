"use client";

import AIPrompt from "./components/ai-prompt";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Dashboard from "./components/dashboard";
import Submissions from "./components/submissions";
import ComingSoon from "./components/coming-soon";

export default function Home() {
  // MAIN COMPONENTS
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<AIPrompt />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </>
  );
}
