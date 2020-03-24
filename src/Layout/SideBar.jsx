import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const StyledSidebar=styled.div`
background-color:#ddd;

grid-column: 1/1;
grid-row: 2/5;
/* height:auto; */
`

export default function SideBar(){
    return<StyledSidebar>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Cards">Cards</Link>
            </li>
            <li>
              <Link to="/Imagenes">Imagenes</Link>
            </li>
    </StyledSidebar>
}