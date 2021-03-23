import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Content from '../Content'
//import Card from '../Card'
import Footer from '../Footer'
import Nav from "../Nav";

const Wrapper = styled.div`
    border: 2px solid black;
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr; 
   
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
            <Header>
            <h1>{props.title}</h1>
            <Nav>
                Sobre="Sobre"
                Vogais="Vogais"
                Consoantes="Consoantes"
            </Nav>
            </Header>
            <Content>{children}</Content> 
            <Footer year="2021">
                TCC Etec Embu | Programa de alfabetização e estimulaçao cognitiva.
            </Footer> 
        </Wrapper>
    ); 
};

export default Layout;