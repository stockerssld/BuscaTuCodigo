  
import React from 'react'
import styled from 'styled-components'

const StyledHeader=styled.div`
grid-column: 1/-1;
grid-row: 1/2;
background-color:blue;
`
export default function ({children}){
  return(
    <StyledHeader>
    Header
    </StyledHeader>
  )
}