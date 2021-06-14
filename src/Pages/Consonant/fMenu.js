import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import f_Menu from '../../Assets/consonants/F/f_Menu.JPG';

import ReactAudioPlayer from 'react-audio-player';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 900px);
   
   
    font-size: 20em;    
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


function fMenu(){  
   
    return(
        <Layout>
            <Container>
                <AudioInstrucao controls />
                    <Wrapper>
                    <img src={f_Menu}/>

                    </Wrapper>
                        
                       
            </Container>
            <Link to=""><Button >Continuar</Button></Link>
        </Layout>    
    );
}

export default fMenu;