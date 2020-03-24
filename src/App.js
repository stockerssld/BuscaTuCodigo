import React, {useState,useEffect} from 'react'
import {Level, Heading, Title} from 'rbx'
import ReactDOM from 'react-dom'
import "rbx/index.css";
import { Prism } from './Components/Prism';
import Routes from './Routes'

function App(){
    return(
        <>
        {/* <Prism/> */}
          {/* Hola */}
          <Routes/>
        </>)
}
if(document.getElementById('react_root')){
    ReactDOM.render(<App/>,document.getElementById('react_root'))
}