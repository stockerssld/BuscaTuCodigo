import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {drawerToggleButton as DrawerToggleButton} from './SideBar'


const StyledHeader = styled.div`
margin-top: 32px;
& .toolbar{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 56px;
  background-color:#521751;
  
}
& .toolbar__navigation{
display:flex;
height: 100%;
align-items:center;
padding: 0 1 rem;
  }
  & .toolbar__logo{
    margin-left:0.5rem;
  }
  & .toolbar__logo a {
    color:white;
    text-decoration:none;
    font-size:1.5rem;
  }
  & .toolbar_navigation-items a{
    color:white;
    text-decoration:none;
  }
  & .toolbar_navigation-items ul{
    list-style:none;
    margin:0;
    padding:0;
    display:flex;
  }
  & .toolbar_navigation-items li{
    padding:0 0.5rem;

  }

  & .toolbar_navigation-items a:hover,
  .toolbar_navigation-items a:active{
    color:#fa923f;
  }
  @media (max-width: 768px) {
    .toolbar_navigation-items{
      display:none;
    }
  }
  & .spacer{
    flex:1;
  }

  
  & div#button {
    margin-left: 9px;
   
  }
  @media(min-width:769px){
    & div#button {
    display:none;
  }
  & .toolbar__logo{
    margin-left:0;
  }
}
`

export default function Header({ChangeStatusSideBar}) {
  
  return <StyledHeader>
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div id="button">
          <DrawerToggleButton click={ChangeStatusSideBar}/>
        </div>
        <div className="toolbar__logo"><a>The Logo</a></div>
        <div className="spacer"/>
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Cards">Cards</Link>
            </li>
            <li>
              <Link to="/Imagenes">Imagenes</Link>
            </li></ul>
        </div>
      </nav>
    </header>
    <br/>
  </StyledHeader>
}