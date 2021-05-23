import React from 'react';
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';

//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import NuvemAnel from '../../../src/Assets/cloud/anel.JPG'; 
import NuvemAve from '../../../src/Assets/cloud/ave.JPG'; 
import NuvemOvo from '../../../src/Assets/cloud/ovo.JPG'; 
import NuvemSapo from '../../../src/Assets/cloud/sapo.JPG'; 
import NuvemUrso from '../../../src/Assets/cloud/urso.JPG'; 
import NuvemUva from '../../../src/Assets/cloud/uva.JPG'; 

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

const CloudA = () => { 
    return(
        <Layout> 
            <Container>
                <AudioInstrucao /> 
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

export default CloudA;