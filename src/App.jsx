import "./App.css";

// react router dom
import { Routes, Route } from "react-router";

// pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

// components
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
