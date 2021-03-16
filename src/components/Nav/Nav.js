import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
    background: rgb(51,170,204);
    color: white;
    display: flex;
`

const H1 = styled.h1`
    font-size: 1.25em;
`

const Ul = styled.ul`
    text-decoration: none;
    justify-content: center;
`

const Li = styled.li`
    text-decoration: none;
`

const P = styled.p`
    text-decoration: none;
`

const Nav = ({Title, Sobre, Vogais, Consoantes}) => { 
    return ( 
        <Div>
            <H1>{Title}</H1>
            <Ul>
                <Li>
                    <P>{Sobre}</P>
                </Li>
                <Li> 
                    <P>{Vogais}</P>                    
                </Li>
                <Li> 
                    <P>{Consoantes}</P> 
                </Li>
            </Ul>
        </Div>
    )
}

export default Nav
