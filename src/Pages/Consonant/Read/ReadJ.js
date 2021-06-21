import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import ReactAudioPlayer from 'react-audio-player';
import telaReadJ from '../../../Audios/J/telaReadJ.mp3';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-column-gap: 4em;
    font-size: 1.6em;    
    justify-content: center;
`; 

const CardClick = styled(Card)`
    cursor: pointer; 
        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
            transform: translate(0, -5px);  
        } 
    margin:6px;
`;

const AudioInstrucao = styled(ReactAudioPlayer)`
    margin: 40px;
`;


function ReadJ(){  
   
    return(
        <Layout>
            <Container>
                <AudioInstrucao src={telaReadJ} controls />
                    <Wrapper>
                        <div>
                            <CardClick>JAJA</CardClick>
                            <CardClick>JIJI</CardClick>
                            <CardClick>JUJU</CardClick>
                            <CardClick>JACA</CardClick>
                            <CardClick>JAPA</CardClick>
                            <CardClick>JECA</CardClick>
                            <CardClick>JOGA</CardClick>
                            <CardClick>JOÃO</CardClick>
                        </div>
                        <div>
                            <CardClick>JUCA</CardClick>
                            <CardClick>CAJU</CardClick>
                            <CardClick>JUBA</CardClick>
                            <CardClick>JUJUBA</CardClick>
                            <CardClick>AJUDA</CardClick>
                            <CardClick>AJUDAVA</CardClick>
                            <CardClick>JUCA JOGA BOLA</CardClick>
                            <CardClick>A LAJE CAIU.</CardClick>
                        </div>
                    </Wrapper>
                </Container>
            <Link to="/typeConsonantsJ"><Button >Continuar</Button></Link>
        </Layout>    
    );
}

export default ReadJ;