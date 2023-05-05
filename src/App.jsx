import "./App.css";

// react router dom
import { Routes, Route } from "react-router";

// pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Store from "./pages/Store";

// components
import Navbar from "./components/shared/Navbar";
import CartContextProvider from "./context/CartContextProvider";

// context

function App() {
  return (
    <CartContextProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/store?" element={<Store />} />
        </Routes>
      </div>
    </CartContextProvider>
  );
}

export default App;
