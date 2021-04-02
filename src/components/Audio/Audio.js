import React from 'react';
import styled from 'styled-components'; 

const Wrapper = styled.div`
`
const Audio = ({to, path, alt}) => { 

    return(
        <Wrapper>
            <a href={to}>
                <img path={path} alt={alt}  /> 
            </a>
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
