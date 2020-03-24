import React, { memo } from "react";
import Body from './Body'
import Header from './Header'

import Footer from './Footer'
import styled from "styled-components";
import SideBar from "./SideBar";

const StyledContainer = styled.div`
        width: auto;
        height: 500px;
        background-color: #efefef;
        margin: auto;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 1rem;
`
export default function Layout({ children }) {
    return (
        <StyledContainer>
            <Header />
            <SideBar/>
            <Body>{children}</Body>
            <Footer />
        </StyledContainer>
    );
}