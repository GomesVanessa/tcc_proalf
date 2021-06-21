import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';
import Button from '../components/Button/Button';
import elefante from '../../src/Assets/e/elefante.png';
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
    height: 320px;
    width: 320px;
    object-fit: contain;
`; 
const AudioInstrucao = styled(ReactAudioPlayer)`
    margin-top: 80px; 
`;

const TelaE = () => {
  return(
    <Layout>
        <Container>
        <AudioInstrucao controls />
            <Wrapper>
            <VogalImage src={elefante}  alt="Vogal E" />
                <div> E e</div>
            </Wrapper>
                <Link to="ClickImageE"><Button>Continuar</Button></Link>
        </Container>
    </Layout>
  )
}

export default TelaE