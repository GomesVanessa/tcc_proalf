import React from 'react';
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';

//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import omi from '../../../src/Assets/letters/omi.JPG';
import ami from '../../../src/Assets/letters/ami.JPG';
import o_cur from '../../../src/Assets/letters/o_cur.JPG';
import I from '../../../src/Assets/letters/I.JPG';
import O from '../../../src/Assets/letters/O.JPG';
import A from '../../../src/Assets/letters/A.JPG';
import Q from '../../../src/Assets/letters/Q.JPG';
import Z from '../../../src/Assets/letters/Z.JPG';
//import qmi from '../../../src/Assets/letters/qmi.JPG';
import P from '../../../src/Assets/letters/P.JPG';
//import J from '../../../src/Assets/letters/a_cur.JPG';
import U from '../../../src/Assets/letters/U.JPG';
import J from '../../../src/Assets/letters/J.JPG';
import ocur from '../../../src/Assets/letters/ocur.JPG';

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

const ClickLetterO = () => { 
    return(
        <Layout> 
            <Container>
                <AudioInstrucao /> 
                    <Wrapper>
                        <div>
                            <img src={omi} alt="E" />
                            <img src={ami} alt="A" />
                            <img src={o_cur} alt="E" />
                            <img src={I} alt="E" />
                            <img src={O} alt="A" />
                            <img src={A} alt="E" />
                            <img src={omi} alt="D" />
                            <img src={Q} alt="A" />
                            <img src={O} alt="F" />
                            <img src={Q} alt="E" />
                            <img src={Z} alt="A" />
                            <img src={U} alt="P" />
                            <img src={ocur} alt="U" />
                            <img src={P} alt="E" />
                            <img src={J} alt="E" />
                            {/* <img src={jmi} alt="A" /> */}
                        </div>
                    </Wrapper>
            </Container>
            <Button>Continuar</Button>
        </Layout>
    )
}

export default ClickLetterO;