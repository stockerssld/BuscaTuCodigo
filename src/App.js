import React from 'react'
import ReactDOM from 'react-dom'
import "rbx/index.css";
import Routes from './Routes'
import { Loader } from './Components/Loader';

function App(){
    return(
        <>
        {<Loader isPageLoad={true} /> }	
          <Routes/>
        </>)
}
if(document.getElementById('react_root')){
    ReactDOM.render(<App/>,document.getElementById('react_root'))
}86