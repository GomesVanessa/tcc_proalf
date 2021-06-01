import React from 'react';
import {useState} from 'react';
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

import Aa from '../../Assets/representacao/Aa.jpg';

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
    margin: 30px;
`;

const ImageGrid = styled.div`
    display: flex;
    object-fit: contain;
    justify-content: center;
    margin: auto;

`;

const ClickLetterA = () => {

    return(
        <Layout>
            <Container>
                <AudioInstrucao />
                    <Wrapper>
                        <ImageGrid>
                            <div><img src={Aa} alt="A" /></div>
                        </ImageGrid>
                        <div>
                            <img src={A} alt="A" />
                            <img src={ami} alt="A" />
                            <img src={a_cur} alt="A" />
                            <img src={omi} alt="O" />
                            <img src={A} alt="A" />
                            <img src={bmi} alt="B" />
                            <img src={dmi} alt="D" />
                            <img src={A} alt="A" />
                            <img src={a_cur} alt="A" />
                            <img src={I} alt="I" />
                            <img src={ami} alt="A" />
                            <img src={P} alt="P" />
                            <img src={umi} alt="U" />
                            <img src={emi} alt="U" />
                            <img src={acur} alt="A" />

                        </div>
                    </Wrapper>
            </Container>
            <a href="/enterLetterA"><Button>Continuar</Button></a>
        </Layout>
    );
}

export default ClickLetterA;