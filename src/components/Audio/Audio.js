import React from 'react';
import styled from 'styled-components'; 
import volume from '../../Assets/icons/volume5.png'

const Wrapper = styled.button`
    border: none; 
    background: transparent; 
`
const Audio = ({path}) => { 
    const handleClick = () => {
        alert()

    }
    return(
        <Wrapper>           
            <img src={volume} />
                <audio src={'http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg}'} >
                    Seu navegador não suporta audio.         
                </audio>
        </Wrapper>
    )
}

export default Audio

// const Audio = ({onClick, children}) => {
//     return(
//         <Wrapper onClick={onClick}>
//             <img src={iconVolume} type="audio/A1" />
//             {children}
            
//             </Wrapper>
//     );
// }


// export const Audio_ = () => {
//     const playAudio = audioFile => {
//         audioFile.play(); 
//     }
//     return(
//         <Audio onClick={playAudio}>
//             //<img src={iconVolume} alt="Audio" width="200" />
//            <source src={iconVolume} type="audio/A1" /> 
//         </Audio>
//     )
// }       
