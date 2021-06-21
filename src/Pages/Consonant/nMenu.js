import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import n_Menu from '../../Assets/consonants/N/n_Menu.jpg';
import ReactAudioPlayer from 'react-audio-player';
import telaHomeN from '../../Audios/N/telaHomeN.mp3';

const Image = styled.img`
    width: 80%;
    justify-content: center;

`; 

const AudioInstrucao = styled(ReactAudioPlayer)`
    margin: 25px;
`;


function nMenu(){  
   
    return(
        <Layout>
            <Container>
                <AudioInstrucao src={telaHomeN} controls />
                    <Image src={n_Menu}/>
            </Container>
            <Link to=""><Button >Continuar</Button></Link>
        </Layout>    
    );
}

export default nMenu;