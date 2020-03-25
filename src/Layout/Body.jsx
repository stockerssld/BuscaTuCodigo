
import React from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
display:flex;
height:auto;

`

export default function ({ children }) {
  return (
    <StyledBody>
      {children}
    </StyledBody>
  )
}