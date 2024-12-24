import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details, Home, NotExists } from "./Pages";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Wishlist from "./Pages/Wishlist/Wishlist";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/wishlists" element={<Wishlist />} />
        <Route path="*" element={<NotExists />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
