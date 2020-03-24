import React, { memo } from "react";
import Body from './Body'
import Header from './Header'

import Footer from './Footer'
import styled from "styled-components";
import SideBar, { backdrop as BackDrop } from "./SideBar";
import { useSideBar } from "../Hooks/useSideMenu";

const StyledContainer = styled.div`
        width: auto;
        height: 100%;
        background-color: #efefef;
        margin: auto;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 1rem;
`

export default function Layout({ children }) {

    const { sideBarOpen, ChangeStatusSideBar,ClosedStatusSideBar } = useSideBar();
    let backDrop;
    if (sideBarOpen) {
        backDrop = <BackDrop ClosedStatusSideBar={ClosedStatusSideBar} />
    }
    console.log(ChangeStatusSideBar)
    return (
        <StyledContainer>
            <Header ChangeStatusSideBar={ChangeStatusSideBar}/>
            <SideBar show={sideBarOpen}/>
            {backDrop}
            <Body>{children}</Body>
            <Footer />
        </StyledContainer>
    );
}