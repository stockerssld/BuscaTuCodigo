import React from 'react'
import NoAuth from "./../Pages/NoAuth";
import Home from "./../Pages/Home";
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
  },
];

export const RenderComponent = props => {
  const { AuthInfo = '', component } = props;
  console.log(props, 'props RENDER')
  // console.log(component,'props Component')
  // if (AuthInfo.token !== undefined) {
  //   return component
  // }
  // return <>NO as iniciado sesion</>;
  return <></>
};