import React from 'react';
import './App.css';
import { NavBar, HomePage, Footer } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="app-container">
        <NavBar />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
