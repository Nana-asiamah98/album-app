import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Album from "./components/Album";
import Gallery from "./pages/Gallery";
import Photos from "./pages/Photos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path=":albumId/photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
