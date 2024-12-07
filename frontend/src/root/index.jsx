import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import Create from "../pages/create/Create";

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Route>
      <Route to="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};

export default Root;
