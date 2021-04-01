import React from 'react';
//import styled from 'styled-components';

const Icon = ({to, path, alt}) => { 

    return(
        <a href={to}>
            <img src={path} alt={alt} /> 
        </a>
    )
}
   
export default Icon


