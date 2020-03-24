  
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
        <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Cards">Cards</Link>
            </li>
            <li>
              <Link to="/Imagenes">Imagenes</Link>
            </li>
          </ul>
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