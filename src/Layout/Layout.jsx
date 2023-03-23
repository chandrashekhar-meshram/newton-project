import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SingleDetails from "../Pages/SingleDetails";

const Layout = (props) => {
  return (
    <Routes>
      <Route path="/:id" element={<SingleDetails users={props.users} />} />
      <Route path="/" element={<Home users={props.users} />} />
    </Routes>
  );
};

export default Layout;
