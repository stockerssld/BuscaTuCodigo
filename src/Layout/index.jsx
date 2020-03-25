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
        display: flex;
        flex-direction:column;
`

export default function Layout({ children }) {

    const { sideBarOpen, ChangeStatusSideBar, ClosedStatusSideBar } = useSideBar();
    let backDrop;
    if (sideBarOpen) {
        backDrop = <BackDrop ClosedStatusSideBar={ClosedStatusSideBar} />
    }
    return (
        <StyledContainer>
            <Header ChangeStatusSideBar={ChangeStatusSideBar} />
            <SideBar show={sideBarOpen} />            
            <div style={{height:'100%',flex:1,display:'flex'}}>
            <div style={{background:'red',flex:1,height:'auto'}}>
            
            <SideBar show2/>
                </div>
                <div style={{flex:3.8,paddingLeft:15,paddingRight:15,paddingTop:5, overflow:'scroll'}}>
                    <Body>{children}</Body>
                </div>
                </div>
                {backDrop}
            {/* <Footer /> */}
        </StyledContainer>
    );
}