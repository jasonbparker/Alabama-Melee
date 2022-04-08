import React from "react";
import { Route, Switch } from "react-router-dom";
import Bham from "../regions/Bham";
import Hsv from "../regions/Hsv";
import Ttown from "../regions/Ttown";
import Dashboard from "../dashboard/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Dashboard />
      </Route>
      <Route exact={true} path="/regions/bham">
        <Bham />
      </Route>
      <Route exact={true} path="/regions/hsv">
        <Hsv />
      </Route>
      <Route exact={true} path="/regions/ttown">
        <Ttown />
      </Route>
    </Switch>
  );
}
