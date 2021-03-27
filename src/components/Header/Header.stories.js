import React from 'react';
import Header from "./Header";
//import {Logo} from "../../Assets/icons/Logo.png";

  
export default{ 
    title: 'Proalf/Header', 
     component: Header 
};

export const HeaderTitle = () => {
    return( 
        <Header Title='Proalf' Logo='src={Logo} alt="Logo"' Login='' WhatsApp=''/>
    )
}

//tentando colocar um logo.. <img src={Logo} alt="Logo" style="float:right;width:200px"></img>

