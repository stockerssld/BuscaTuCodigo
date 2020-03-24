import React, {useState,useEffect} from 'react'
import {Level, Heading, Title} from 'rbx'
import ReactDOM from 'react-dom'
import "rbx/index.css";

function App(){
    
    return(
        <>
          Hola
        </>)
}
if(document.getElementById('react_root')){
    ReactDOM.render(<App/>,document.getElementById('react_root'))
}