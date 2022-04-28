import React from "react";
import { Route, Routes } from "react-router-dom";
import Bham from "../regions/Bham";
import Hsv from "../regions/Hsv";
import Ttown from "../regions/Ttown";
import Dashboard from "../dashboard/Dashboard";
import Pr from "../dashboard/Pr";

export default function Routes1() {
  return (
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/regions/bham" exact element={<Bham />} />
      <Route path="/regions/hsv" exact element={<Hsv />} />
      <Route path="/regions/ttown" exact element={<Ttown />} />
      <Route path="/pr" exact element={<Pr />} />
    </Routes>
  );
}
