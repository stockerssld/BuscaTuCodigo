import React, {useState,useEffect} from 'react'
import {Level, Heading, Title} from 'rbx'
import ReactDOM from 'react-dom'
import "rbx/index.css";
import { Prism } from './Components/Prism';

function App(){
    return(
        <>
        <Prism/>
          Hola
        </>)
}
if(document.getElementById('react_root')){
    ReactDOM.render(<App/>,document.getElementById('react_root'))
}