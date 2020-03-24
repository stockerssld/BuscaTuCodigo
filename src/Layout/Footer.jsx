import React from 'react'
import styled from 'styled-components'


const StyledFooter=styled.div`
  grid-column: 1/-1;
  grid-row: 5/-1;
  background-color:green;
`
export default function (){
  return(
        <StyledFooter>
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a> Luis Antonio Padre Garcia</a>
          </div>
        </StyledFooter>
        
  )
}