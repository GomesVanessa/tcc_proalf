import React from 'react';
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';

//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import E from '../../../src/Assets/letters/E.JPG';
import ami from '../../../src/Assets/letters/ami.JPG';
import e_cur from '../../../src/Assets/letters/e_cur.JPG';
import emi from '../../../src/Assets/letters/emi.JPG';
import dmi from '../../../src/Assets/letters/dmi.JPG';
import A from '../../../src/Assets/letters/A.JPG';
import F from '../../../src/Assets/letters/F.JPG';
import P from '../../../src/Assets/letters/P.JPG';
import umi from '../../../src/Assets/letters/umi.JPG';
import acur from '../../../src/Assets/letters/acur.JPG';
import ecur from '../../../src/Assets/letters/ecur.JPG';
import a_cur from '../../../src/Assets/letters/a_cur.JPG';


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

const ClickLetterE = () => { 
    return(
        <Layout> 
            <Container>
                <AudioInstrucao /> 
                    <Wrapper>
                        <div>
                            <img src={E} alt="E" />
                            <img src={ami} alt="A" />
                            <img src={e_cur} alt="E" />
                            <img src={emi} alt="E" />
                            <img src={ami} alt="A" />
                            <img src={emi} alt="E" />
                            <img src={dmi} alt="D" />
                            <img src={A} alt="A" />
                            <img src={F} alt="F" />
                            <img src={ecur} alt="E" />
                            <img src={a_cur} alt="A" />
                            <img src={P} alt="P" />
                            <img src={umi} alt="U" />
                            <img src={emi} alt="E" />
                            <img src={acur} alt="A" />
                        </div>
                    </Wrapper>
            </Container>
            <Button>Continuar</Button>
        </Layout>
    )
}

export default ClickLetterE;