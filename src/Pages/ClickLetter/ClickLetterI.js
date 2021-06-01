import React from 'react';
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';

//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import imi from '../../../src/Assets/letters/imi.JPG';
import i_cur from '../../../src/Assets/letters/i_cur.JPG';
import E from '../../../src/Assets/letters/E.JPG';
import ami from '../../../src/Assets/letters/ami.JPG';

import emi from '../../../src/Assets/letters/emi.JPG';
import dmi from '../../../src/Assets/letters/dmi.JPG';
import A from '../../../src/Assets/letters/A.JPG';
import umi from '../../../src/Assets/letters/umi.JPG';
import I from '../../../src/Assets/letters/I.JPG';

const Wrapper = styled.div`
    //background-color: lightskyblue;
     
    img{
        width: 160px;
        height: 100px; 
        padding: 1em;
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

const ClickLetterI = () => { 
    return(
        <Layout> 
            <Container>
                <AudioInstrucao /> 
                    <Wrapper>
                        <div>
                            <img src={imi} alt="I" />
                            <img src={imi} alt="I" />
                            <img src={i_cur} alt="I" />
                            <img src={E} alt="E" />
                            <img src={ami} alt="A" />
                            <img src={emi} alt="E" />
                            <img src={dmi} alt="D" />
                            <img src={A} alt="A" />
                            <img src={i_cur} alt="I" />
                            <img src={imi} alt="I" />
                            <img src={ami} alt="A" />
                            <img src={imi} alt="I" />
                            <img src={umi} alt="U" />
                            <img src={I} alt="I" />
                            <img src={E} alt="E" />
                        </div>
                    </Wrapper>
            </Container>
            <Button>Continuar</Button>
        </Layout>
    )
}

export default ClickLetterI;