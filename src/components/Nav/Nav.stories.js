import React from 'react';
import Nav from './Nav';

export default { 
    title: 'Proalf/Nav', 
    component: Nav
}; 

export const NavTitle = () => {
    return( 
       <Nav Title='Proalf' Sobre='Sobre' Vogais='Vogais' Consoantes='Consoantes'/>
    )
}

