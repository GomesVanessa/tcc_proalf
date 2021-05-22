import React from 'react';
import styled from 'styled-components'; 
import volume from '../../Assets/icons/volume6.png'

const Wrapper = styled.button`
    border: none; 
    background: transparent; 
`
const Audio = ({src, controls=true, icon=false, className}) => { 
    const handleClick = () => {
        alert()

    }
    return(
        <Wrapper className={className} >           
                {icon ? <img src={volume} /> : null}
                {/* <audio src={path} controls> */}
                <audio src={src} controls={controls} icon={icon}>
                    O seu navegador não suporta áudio.         
                </audio>
        </Wrapper>
    )
}

export default Audio