import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import ReactAudioPlayer from 'react-audio-player';
import telaReadM from '../../../Audios/J/telaReadJ.mp3';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 250px);
    grid-column-gap: 2em;
    grid-row-gap: 1em;
    font-size: 1.4em;    
    justify-content: center;
`; 

const CardClick = styled(Card)`
    cursor: pointer; 
        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
            transform: translate(0, -5px);  
        } 
`;

const CardClick2 = styled(Card)`
    cursor: pointer; 
        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
            transform: translate(0, -5px);  
        } 
    font-size: 1.4em;
    width:50.5%;
    margin-left:23.5%;
    //line-height:1em;
`;

const AudioInstrucao = styled(ReactAudioPlayer)`
    margin: 24px;
`;

function ReadM(){  
   
    return(
        <Layout>
            <Container>
                <AudioInstrucao src={telaReadM} controls />
                    <Wrapper>
                        <div>
                            <CardClick>MAU</CardClick>
                            <CardClick>MEU</CardClick>
                            <CardClick>MIA</CardClick>
                            <CardClick>MIOU</CardClick>
                            <CardClick>MIMA</CardClick>
                            <CardClick>MIMO</CardClick>
                            <CardClick>MAMI</CardClick>
                            <CardClick>EMA</CardClick>
                        </div>
                        <div>
                            <CardClick>MACA</CardClick>
                            <CardClick>MALA</CardClick>
                            <CardClick>MAPA</CardClick>
                            <CardClick>MULA</CardClick>
                            <CardClick>MELA</CardClick>
                            <CardClick>MOLA</CardClick>
                            <CardClick>MOEDA</CardClick>
                            <CardClick>CAMA</CardClick>
                        </div>
                    </Wrapper>
                    <div>
                        <CardClick2>
                            <div>A MOLA É DA MIMI.</div>
                        </CardClick2> 
                        <CardClick2>
                            <div>O MAPA DO AMAPÁ É DA MAMÃE.</div>
                        </CardClick2>
                        <CardClick2>
                            <div>A MALA É FEIA.</div>
                        </CardClick2>                         
                    </div>
                </Container>
            <Link to="/testFJM"><Button >Continuar</Button></Link>
        </Layout>    
    );
}

export default ReadM;