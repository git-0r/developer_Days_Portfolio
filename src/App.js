import React from "react";
import "./css/app.css";
import Navbar from "./components/navbar"
import Header from "./components/header";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
}
