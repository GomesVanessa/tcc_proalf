import React from 'react';
import styled from 'styled-components'; 
import volume from '../../Assets/icons/volume6.png'

const Wrapper = styled.button`
    border: none; 
    background: transparent; 
    margin: 2em;
`
const Audio = ({path}) => { 
    const handleClick = () => {
        alert()

    }
    return(
        <Wrapper>           
            <img src={volume} />
                {/* <audio src={path} controls> */}
                <audio src={path} controls>
                    O seu navegador não suporta áudio.         
                </audio>
        </Wrapper>
    )
}

export default Audio