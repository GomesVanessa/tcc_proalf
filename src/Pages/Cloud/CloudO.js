import React from 'react';
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';

//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import NuvemOvo from '../../../src/Assets/cloud/ovo.JPG'; 
import NuvemAve from '../../../src/Assets/cloud/ave.JPG'; 
import NuvemIgor from '../../../src/Assets/cloud/igor.JPG'; 
import NuvemBule from '../../../src/Assets/cloud/bule.JPG'; 
import NuvemOnca from '../../../src/Assets/cloud/onca.JPG'; 
import NuvemOsso from '../../../src/Assets/cloud/osso.JPG'; 

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

const CloudO = () => { 
    return(
        <Layout> 
            <Container>
                <AudioInstrucao /> 
                    <Wrapper>
                        <div>
                            <img src={NuvemOvo} alt="Ovo" />
                            <img src={NuvemAve} alt="Ave" />
                            <img src={NuvemIgor} alt="Igor" />
                            <img src={NuvemBule} alt="Bule" />
                            <img src={NuvemOnca} alt="Onca" />
                            <img src={NuvemOsso} alt="Osso" />        
                        </div>
                    </Wrapper>
            </Container>
            <Button>Continuar</Button>
        </Layout>
    )
}

export default CloudO;