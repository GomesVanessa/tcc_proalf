import React from 'react';
import Footer from './Footer';

export default { 
    title: 'Proalf/Footer', 
    component: Footer,
    /*argTypes: {
        year: {
            description: '', 
            control: '',
            defaultValue: ''
        }
    }*/
}; 

export const Footertext = () => {
    return (
        <Footer text = '© 2021 | TCC Etec Embu | Programa de Alfabetização e Estimulação Cognitiva.' />  
    );
}; 


