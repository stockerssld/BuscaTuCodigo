import React from 'react'
import styled from 'styled-components'


const StyledSidebar=styled.div`
background-color:#ddd;
grid-column: 1/1;
grid-row: 2/5;`

export default function SideBar(){
    return<StyledSidebar>Sidebar</StyledSidebar>
}