import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export default function SideBar({show}) {
  if(!show) return null
  return (<SideBarStyled>
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
  </SideBarStyled>)
}

const SideBarStyled = styled.nav`
height:100%;
background-color:white;
box-shadow:1px 0px 7px rgba(0,0,0,0.5);
position:fixed;
top:0;
left:0;
width:70%;
max-width:400px;
z-index:200;
& ul{
  height:100%;
  list-style:none;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
& li{
  margin:0.5rem 23px;
}
&a{
  color:#521751;
  text-decoration:none;
  font-size:1.2rem;
}
&a:hover,a:active{
  color:#fa923f;
}
@media (min-width:769px){
 
    display:none
}
`

export function drawerToggleButton (props){
  
 return <DrawerToggleButtonStyled className="toggle-button" svgIcon="/icons/16px/menu.svg" onClick={() => props.click()}>
    <div id="styled-navbar-content-icon" />
  </DrawerToggleButtonStyled>
}
const DrawerToggleButtonStyled = styled.button`
display:flex;
height: 24px;
width:30px;
background-color:transparent;
border:none;
cursor:pointer;
& div#styled-navbar-content-icon {
		width: 24px;
		height: 24px;
		background: white;
		mask: ${props => `url(${props.svgIcon}) no-repeat center;`})
	}
`



export const backdrop = props => (
  <BackdropStyled onClick={props.ClosedStatusSideBar}/>
)

const BackdropStyled = styled.div`
position:fixed;
width:100%;
height:100%;
background-color:rgba(0,0,0,0.5);
z-index:100;
top:0;
left:0;
`