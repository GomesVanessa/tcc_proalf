import React from 'react';
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';

//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import NuvemIma from '../../../src/Assets/cloud/ima.JPG'; 
import NuvemUva from '../../../src/Assets/cloud/uva.JPG'; 
import NuvemAno from '../../../src/Assets/cloud/ano.JPG'; 
import NuvemBola from '../../../src/Assets/cloud/bola.JPG'; 
import NuvemIndio from '../../../src/Assets/cloud/indio.JPG'; 
import NuvemIoio from '../../../src/Assets/cloud/ioio.JPG'; 

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

const CloudI = () => { 
    return(
        <Layout> 
            <Container>
                <AudioInstrucao /> 
                    <Wrapper>
                        <div>
                            <img src={NuvemIma} alt="Ima" />
                            <img src={NuvemUva} alt="Uva" />
                            <img src={NuvemAno} alt="Ano" />
                            <img src={NuvemBola} alt="Bola" />
                            <img src={NuvemIndio} alt="Indio" />
                            <img src={NuvemIoio} alt="Ioio" />        
                        </div>
                    </Wrapper>
            </Container>
            <Button>Continuar</Button>
        </Layout>
    )
}

export default CloudI;