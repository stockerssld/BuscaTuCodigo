  
import React, { memo, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Rutas, RenderComponent } from "./DataRoute";
import Layout from "../Layout";

export default function() {
  return (
      <Router>
        <Layout>

            <Switch>
              {Rutas.map((route, index) => (
               <Route
               key={index}
               path={route.path}
               exact={route.exact}
               children={<route.main />}
             />
                ))}
            </Switch>
        </Layout>
      </Router>
  );
}