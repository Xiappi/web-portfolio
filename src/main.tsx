import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./components/Layout.tsx";
import About from "./pages/AboutPage.tsx";
import Projects from "./pages/ProjectsPage.tsx";
import Contact from "./pages/ContactPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
