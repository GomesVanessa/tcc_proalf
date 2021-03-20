import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Content from '../Content'
import Card from '../Card'
import Footer from '../Footer'

const Wrapper = styled.div`
    border: 2px solid black;
    display: grid;
    min-height: 90vh;//90%altura
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr; 
   
    grid-template-areas: 
            "header header header header header header"
            "content content content content content content"
            "content content content content content content"
            "content content content content content content"
            "content content content content content content"
            "footer footer footer footer footer footer";
`

export const Layout = (props) => {
    return (
        <Wrapper>
        <Header>{props.title}
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Vogais</a></li>
                <li><a href="/">Consoantes</a></li>
            </ul>
        </nav>
        </Header>
        <Content>
            <Card>

            </Card>
                  
        </Content>
        <Footer>
            
        </Footer>
        </Wrapper>
    )
}

export default Layout