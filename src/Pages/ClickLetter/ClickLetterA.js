import React from 'react';
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';

//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import A from '../../../src/Assets/letters/A.JPG';
import ami from '../../../src/Assets/letters/ami.JPG';
import a_cur from '../../../src/Assets/letters/a_cur.JPG';
import omi from '../../../src/Assets/letters/omi.JPG';
import bmi from '../../../src/Assets/letters/bmi.JPG';
import dmi from '../../../src/Assets/letters/dmi.JPG';
import I from '../../../src/Assets/letters/I.JPG';
import P  from '../../../src/Assets/letters/P.JPG';
import umi from '../../../src/Assets/letters/umi.JPG';
import emi from '../../../src/Assets/letters/emi.JPG';
import acur from '../../../src/Assets/letters/acur.JPG';
  
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

const ClickLetterA = () => { 
    return(
        <Layout> 
            <Container>
                <AudioInstrucao /> 
                    <Wrapper>
                        <div>
                            <img src={A} alt="O" />
                            <img src={ami} alt="A" />
                            <img src={a_cur} alt="Uva" />
                            <img src={omi} alt="Sapo" />
                            <img src={A} alt="Urso" />
                            <img src={bmi} alt="Anel" />    
                            <img src={dmi} alt="Ave" />
                            <img src={A} alt="Ovo" />
                            <img src={a_cur} alt="Uva" />
                            <img src={I} alt="Sapo" />
                            <img src={ami} alt="Urso" />
                            <img src={P} alt="Anel" /> 
                            <img src={umi} alt="Sapo" />
                            <img src={emi} alt="Urso" />
                            <img src={acur} alt="Anel" /> 
                                
                        </div>
                    </Wrapper>
            </Container>
            <Button>Continuar</Button>
        </Layout>
    )
}

export default ClickLetterA;