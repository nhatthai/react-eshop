import React from 'react';
import './App.css';
import { Header, Footer } from "./components";
import { CatalogPage } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="app-container">
        <Header />
        <CatalogPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
