import React from "react";
import "./css/app.css";
import Navbar from "./components/navbar"
import Header from "./components/header";
import Skillset from "./components/skillset"
import Projects from "./components/projects"

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skillset />
      <Projects />
    </div>

  );
}
