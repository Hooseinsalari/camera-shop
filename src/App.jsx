import "./App.css";

// react router dom
import { Routes, Route } from "react-router";

// pages
import HomePage from "./pages/HomePage";

// components
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
