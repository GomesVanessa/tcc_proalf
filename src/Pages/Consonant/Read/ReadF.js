import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';

import ReactAudioPlayer from 'react-audio-player';

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


function ReadF(){  
   
    return(
        <Layout>
            <Container>
                <AudioInstrucao controls />
                    <Wrapper>
                        <div>
                            <CardClick>FAFA</CardClick>
                            <CardClick>FIFI</CardClick>
                            <CardClick>FEIA</CardClick>
                            <CardClick>FEIO</CardClick>
                            <CardClick>FIO</CardClick>
                            <CardClick>FUI</CardClick>
                            <CardClick>FOFO</CardClick>
                            <CardClick>AFIA</CardClick>
                        </div>
                        <div>
                            <CardClick>FACA</CardClick>
                            <CardClick>FADA</CardClick>
                            <CardClick>FALA</CardClick>
                            <CardClick>FAMA</CardClick>
                            <CardClick>AFAGA</CardClick>
                            <CardClick>ABAFA</CardClick>
                            <CardClick>ABAFADA</CardClick>
                            <CardClick>FACADA</CardClick>
                        </div>
                                                       
                    </Wrapper>
                    <div>
                        <CardClick2>
                            <div>A FOCA É FEIA.</div>
                        </CardClick2> 
                        <CardClick2>
                            <div>A FADA É FOFA.</div>
                        </CardClick2>
                        <CardClick2>
                            <div>A FACA É DA FIFI.</div>
                        </CardClick2>                         
                    </div>
            </Container>
            <Link to="/typeConsonantsF"><Button >Continuar</Button></Link>
        </Layout>    
    );
}

export default ReadF;