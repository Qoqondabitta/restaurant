import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import Create from "../pages/create/Create";
import Signin from "../pages/signin/Signin";
import Car from "../pages/car/Car";

const Root = () => {
  return (
    <Routes>
      {/* <Route element={<Navbar />}> */}
      <Route path="/" exact element={<Signin />} />
      <Route path="/home" element={<Signin />} />
      <Route path="/create" element={<Create />} />
      <Route path="/car/:id" element={<Car />} />
      {/* </Route> */}
      <Route to="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};

export default Root;
