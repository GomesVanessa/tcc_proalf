import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 2px solid #000;
    ${({correct, active}) => { 
        if(correct && active) {
            return `
                border: 2px solid green; 
            `
        }else{ 
            return`
                border: 2px solid red;
            `
        }
    }} 
`

const Img = styled.img`
    border: 2px solid #fOf;
`


const Card = ({ text, image, correct = false, active = false}) => { 
    return( 
        <Wrapper correct = {correct} active ={active} >
            <Img src={image} alt={text} /> 
        </Wrapper> 
    )
}



export default Card


