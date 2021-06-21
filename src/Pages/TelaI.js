import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';
import Button from '../components/Button/Button';
import indio from '../../src/Assets/i/indio.png';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;  
    font-size: 22em;
    margin:40px;
`;

const VogalImage = styled.img`
    height: 350px;
    width: 350px;
    object-fit: contain;
`; 
const AudioInstrucao = styled(ReactAudioPlayer)`
    margin-top: 80px; 
`;

const TelaI = () => {
  return(
    <Layout>
        <Container>
        <AudioInstrucao controls />
            <Wrapper>
            <VogalImage src={indio}  alt="Vogal A" />
                <div> I i</div>
            </Wrapper>
                <Link to="ClickImageI"><Button>Continuar</Button></Link>
        </Container>
    </Layout>
  )
}

export default TelaI