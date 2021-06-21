import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import f_Menu from '../../Assets/consonants/F/f_Menu.jpg';
import ReactAudioPlayer from 'react-audio-player';
import telaHomeF from '../../Audios/F/telaHomeF.mp3';
 
const Image = styled.img`
    width: 80%;
    justify-content: center;

`; 

const AudioInstrucao = styled(ReactAudioPlayer)`
    margin: 25px;
`;


function fMenu(){  
   
    return(
        <Layout>
            <Container>
                <AudioInstrucao src={telaHomeF} controls />
                    <Image src={f_Menu}/>
            </Container>
            <Link to="/clickImageF"><Button >Continuar</Button></Link>
        </Layout>    
    );
}

export default fMenu;