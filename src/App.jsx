import { useState } from "react";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Checkout from "./Pages/Checkout";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes> */}
    </div>
  );
}
export default App;
