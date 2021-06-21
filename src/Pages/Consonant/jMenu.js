import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import j_Menu from '../../Assets/consonants/J/j_Menu.JPG';
import ReactAudioPlayer from 'react-audio-player';
import telaHomeJ from '../../Audios/J/telaHomeJ.mp3';

const Image = styled.img`
    width: 80%;
    justify-content: center;

`; 

const AudioInstrucao = styled(ReactAudioPlayer)`
    margin: 25px;
`;


function jMenu(){  
   
    return(
        <Layout>
            <Container>
                <AudioInstrucao src={telaHomeJ} controls />
                    <Image src={j_Menu}/>
            </Container>
            <Link to="/clickImageJ"><Button >Continuar</Button></Link>
        </Layout>    
    );
}

export default jMenu;