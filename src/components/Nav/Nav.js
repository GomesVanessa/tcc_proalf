import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.nav`

    background: rgb(51,170,204);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
   
        
    ul{
        justify-items: center;
        list-style:none;
        display: flex; 
        
        li{
            a{
                margin-right:20px;
                font-size:1.25em;
                color: #fff;
                text-decoration: none;  
            }
        }
    }
`

const Nav = ({className, title, sobre, vogais, consoantes}) => { 
    const navItems = [ 
        {
            text: 'Sobre', 
            path: '/'
        }, 
        {
            text: 'Vogais', 
            path: '/vogais'
        }, 
        {
            text: 'Consoantes', 
            path: '/consoantes'
        },
    ]

    return(
        <Wrapper className={className}> 
            <ul>
                {
                    navItems.map(item=>( 
                        <li><a href={item.path}>{item.text}</a></li>
                    ))
                }
            </ul>
        </Wrapper>
    )
}

export default Nav

// const Nav = () => {
//     return(
//         <nav>
//             <a href="/sobre">Sobre</a>
//             <a href="/vogais">Vogais</a>
//             <a href="/consoantes">Consoantes</a>
//         </nav>
//     )
// }