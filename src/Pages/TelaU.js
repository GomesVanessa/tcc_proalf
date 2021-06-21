import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';
import Button from '../components/Button/Button';
import urso from '../../src/Assets/u/urso.png';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;  
    font-size: 18em;
    margin:40px;
`;

const VogalImage = styled.img`
    height: 250px;
    width: 250px;
    object-fit: contain;
`; 
const AudioInstrucao = styled(ReactAudioPlayer)`
    margin-top: 80px; 
`;

const TelaU = () => {
  return(
    <Layout>
        <Container>
        <AudioInstrucao controls />
            <Wrapper>
            <VogalImage src={urso}  alt="Vogal A" />
                <div>U u</div>
            </Wrapper>
                <Link to="ClickImageU"><Button>Continuar</Button></Link>
        </Container>
    </Layout>
  )
}

export default TelaU