import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import Photos from "./pages/Photos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path=":albumId/photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
