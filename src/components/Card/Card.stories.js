import React from 'react';
import Card from './Card';

export default { 
    title: 'Proalf/Card', 
    component: Card
}; 

export const CardFalseActive = () => { 
    return <Card text = "Abacaxi" image="https://via.placeholder.com/150" />
}

export const CardCorrectActive = () => { 
    return <Card text="Abacaxi" image="https://via.placeholder.com/150" active={true} correct={true} /> 
}