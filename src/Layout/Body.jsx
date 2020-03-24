
import React from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
background-color:red;
display:flex;
grid-column: 2/-1;
grid-row: 2/-1;
`

export default function ({ children }) {
  return (
    <StyledBody>
      {children}
    </StyledBody>
  )
}