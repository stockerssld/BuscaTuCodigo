import React from 'react'
import NoAuth from "./../Pages/NoAuth";
import Home from "./../Pages/Home";
export const Rutas = [
  {
    path: "/",
    exact: true,
    
    main: () => <Home/>
  },
  {
    path: "/Cards",
    main: () => <h2>Card</h2>
  },
  {
    path: "/Imagenes",
    main: () => <NoAuth/>
  }
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