import React from 'react'
import styled from 'styled-components'


const StyledFooter=styled.div`
      padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: rgb(62, 69, 81); color: rgb(255, 255, 255);
    width: 100%;
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