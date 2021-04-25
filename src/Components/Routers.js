import React from "react";
import { Route, Switch } from "react-router-dom";
import Availability from "../Pages/Availability";

import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import WhatsNew from "../Pages/WhatsNew";

export default function Routers() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/available" component={Availability} />
        <Route path="/signup" component={Signup} />
        <Route path="/jobs" component={WhatsNew} />
      </Switch>
    </div>
  );
}
