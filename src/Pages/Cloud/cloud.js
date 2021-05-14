import React from 'react';
import styled from "styled-components";
import Nuvem from '../../Assets/a/nuvensLetterA/nuvem.png';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';

//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import NuvemAnel from '../../../src/Assets/a/nuvensLetterA/anel.jpg'; 
import NuvemAve from '../../../src/Assets/a/nuvensLetterA/ave.jpg'; 
import NuvemOvo from '../../../src/Assets/a/nuvensLetterA/ovo.jpg'; 
import NuvemSapo from '../../../src/Assets/a/nuvensLetterA/sapo.jpg'; 
import NuvemUrso from '../../../src/Assets/a/nuvensLetterA/urso.jpg'; 
import NuvemUva from '../../../src/Assets/a/nuvensLetterA/uva.jpg'; 

const Wrapper = styled.div`
    //background-color: lightskyblue;
    margin-top:100px;

    ${Audio} {
        margin-top: 550px;
    }
 
    img{
        width: 250px;
        height: 140px; 
        padding: .7em;
        border-radius: 6px; 
        cursor: pointer; 
        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
            transform: translate(0, -5px);  
        }       
    }
    label{
        color: #154360; 
    }
`;

const Cloud = () => { 
    return(
        <Layout> 
            <Container>
                <Audio /> 
                    <Wrapper>
                        <div>
                            <img src={NuvemAve} alt="Ave" />
                            <img src={NuvemOvo} alt="Ovo" />
                            <img src={NuvemUva} alt="Uva" />
                            <img src={NuvemSapo} alt="Sapo" />
                            <img src={NuvemUrso} alt="Urso" />
                            <img src={NuvemAnel} alt="Anel" />        
                        </div>
                    </Wrapper>
            </Container>
            <Button>Continuar</Button>
        </Layout>
    )
}

export default Cloud;