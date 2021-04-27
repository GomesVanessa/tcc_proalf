import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

const Wrapper = styled.div`
    display: grid;
    min-height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 70px 1fr 1fr 1fr 1fr 70px; 
   
    grid-template-areas: 
            "header header header header header header"
            "content content content content content content"
            "content content content content content content"
            "content content content content content content"
            "content content content content content content"
            "footer footer footer footer footer footer";
`;

export const Layout = (props) => {
    const {children} = props;
    return (
        <Wrapper>
            <Header />               
            <Content> {children} </Content>
            <Footer year="2021">
                TCC Etec Embu | Programa de alfabetização e estimulaçao cognitiva.
            </Footer> 
        </Wrapper>
        
    ); 
};

export default Layout;