import React from 'react'
import NoAuth from "./../Pages/NoAuth";
import Home from "./../Pages/Home";
import BotonesPage from '../Pages/Botones';
import { CardExample } from '../Util/Cards/example';
import ImagesPage from '../Pages/Images';

export const Rutas = [
  {
    path: "/",
    exact: true,
    
    main: () => <Home/>
  },
  {
    path: "/Cards",
    main: () => <CardExample/>
  },
  {
    path: "/Imagenes",
    main: () => <ImagesPage/>
  },,
  {
    path: "/Botones",
    main: () => <BotonesPage/>
  },
];
