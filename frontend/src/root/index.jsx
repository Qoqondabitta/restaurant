import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import Create from "../pages/create/Create";
import Signin from "../pages/signin/Signin";

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Route>
      <Route path="/" element={<Signin />} />
      <Route to="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};

export default Root;
