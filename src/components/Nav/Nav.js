import React from 'react'
import styled from 'styled-components';

const Div = styled.div`

    background: rgb(51,170,204);
    color: white;
    display: flex;
    text-align: center;
    
    h1{
        font-size:1.25em;
        margin-top: 36.5px; 
        }
    ul{
        justify-items: center;
        list-style:none;
        display: flex; 
        
        li{
            
            p{
                margin-right:20px;
                font-size:1.25em;
            }
        }
    }
`

const Nav = ({Title, Sobre, Vogais, Consoantes}) => { 
    return ( 
        <Div>
            <h1>{Title}</h1>
            <ul>
                <li>
                    <p>{Sobre}</p>
                </li>
                <li> 
                    <p>{Vogais}</p>                    
                </li>
                <li> 
                    <p>{Consoantes}</p> 
                </li>
            </ul>
        </Div>
    )
}

export default Nav
