import React from 'react';
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';

//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import NuvemEma from '../../../src/Assets/cloud/ema.JPG'; 
import NuvemUva from '../../../src/Assets/cloud/uva.JPG'; 
import NuvemAnel from '../../../src/Assets/cloud/anel.JPG'; 
import NuvemSoco from '../../../src/Assets/cloud/soco.JPG'; 
import NuvemEstrela from '../../../src/Assets/cloud/estrela.JPG'; 
import NuvemEu from '../../../src/Assets/cloud/eu.JPG'; 

const Wrapper = styled.div`
    //background-color: lightskyblue;
     
    img{
        width: 260px;
        height: 150px; 
        padding: 1.5em;
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

const AudioInstrucao = styled(Audio)`
    margin: 60px; 
`;

const CloudE = () => { 
    return(
        <Layout> 
            <Container>
                <AudioInstrucao /> 
                    <Wrapper>
                        <div>
                            <img src={NuvemEma} alt="Ema" />
                            <img src={NuvemUva} alt="Uva" />
                            <img src={NuvemAnel} alt="Anel" />
                            <img src={NuvemSoco} alt="Soco" />
                            <img src={NuvemEstrela} alt="Estrela" />
                            <img src={NuvemEu} alt="Eu" />        
                        </div>
                    </Wrapper>
            </Container>
            <Button>Continuar</Button>
        </Layout>
    )
}

export default CloudE;