import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import m_Menu from '../../Assets/consonants/M/m_Menu.jpg';
import ReactAudioPlayer from 'react-audio-player';
import telaHomeM from '../../Audios/M/telaHomeM.mp3';

const Image = styled.img`
    width: 80%;
    justify-content: center;

`; 

const AudioInstrucao = styled(ReactAudioPlayer)`
    margin: 25px;
`;


function mMenu(){  
   
    return(
        <Layout>
            <Container>
                <AudioInstrucao src={telaHomeM} controls />
                    <Image src={m_Menu}/>
            </Container>
            <Link to="/clickImageM"><Button >Continuar</Button></Link>
        </Layout>    
    );
}

export default mMenu;