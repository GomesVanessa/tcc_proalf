import React from 'react';
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';

//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import omi from '../../../src/Assets/letters/omi.JPG';
import ami from '../../../src/Assets/letters/ami.JPG';
import u_cur from '../../../src/Assets/letters/u_cur.JPG';
import I from '../../../src/Assets/letters/I.JPG';
import U from '../../../src/Assets/letters/U.JPG';
import A from '../../../src/Assets/letters/A.JPG';
import umi from '../../../src/Assets/letters/umi.JPG';
import Q from '../../../src/Assets/letters/Q.JPG';
import Z from '../../../src/Assets/letters/Z.JPG';
//import qmi from '../../../src/Assets/letters/qmi.JPG';
import ucur from '../../../src/Assets/letters/ucur.JPG';
import P from '../../../src/Assets/letters/P.JPG';
//import jmi from '../../../src/Assets/letters/jmi.JPG';
  
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

const ClickLetterU = () => { 
    return(
        <Layout> 
            <Container>
                <AudioInstrucao /> 
                    <Wrapper>
                        <div>
                            <img src={omi} alt="O" />
                            <img src={ami} alt="A" />
                            <img src={u_cur} alt="Uva" />
                            <img src={I} alt="Sapo" />
                            <img src={U} alt="Urso" />
                            <img src={A} alt="Anel" />    
                            <img src={umi} alt="Ave" />
                            <img src={Q} alt="Ovo" />
                            <img src={U} alt="Uva" />
                            <img src={umi} alt="Sapo" />
                            <img src={Z} alt="Urso" />
                            <img src={Z} alt="Anel" /> 
                            <img src={ucur} alt="Sapo" />
                            <img src={P} alt="Urso" />
                            <img src={P} alt="Anel" /> 
                                
                        </div>
                    </Wrapper>
            </Container>
            <Button>Continuar</Button>
        </Layout>
    )
}

export default ClickLetterU;