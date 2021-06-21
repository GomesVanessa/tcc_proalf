import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ReactAudioPlayer from 'react-audio-player';

import AuClickImageA from '../../Audios/A/telaClickImageA.mp3';
import AuAbacaxi from '../../Audios/bancoSons/abacaxi.mp3';
import AuSino from '../../Audios/bancoSons/sino.mp3';
import AuAbelha from '../../Audios/bancoSons/abelha.mp3';
import AuAnel from '../../Audios/bancoSons/anel.mp3';
import AuOlhos from '../../Audios/bancoSons/olho.mp3';
import AuApito from '../../Audios/bancoSons/apito.mp3';
import AuFoguete from '../../Audios/bancoSons/foguete.mp3';
import AuAranha from '../../Audios/bancoSons/aranha.mp3';
import AuArvore from '../../Audios/bancoSons/arvore.mp3';
import AuCoelho from '../../Audios/bancoSons/coelho.mp3';
import AuAviao from '../../Audios/bancoSons/aviao.mp3';
import AuGalinha from '../../Audios/bancoSons/galinha.mp3';

import Abacaxi from '../../../src/Assets/a/abacaxi.png';
import Sino from '../../../src/Assets/a/sino.png';
import Abelha from '../../../src/Assets/a/abelha.png';
import Anel from '../../../src/Assets/a/anel.png';
import Olhos from '../../../src/Assets/a/olhos.png';
import Apito from '../../../src/Assets/a/apito.png';
import Foguete from '../../../src/Assets/a/foguete.png';
import Aranha from '../../../src/Assets/a/aranha.png';
import Arvore from '../../../src/Assets/a/arvore.png';
import Coelho from '../../../src/Assets/a/coelho.png';
import Aviao from '../../../src/Assets/a/aviao.png';
import Galinha from '../../../src/Assets/a/galinha.png';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 240px);
    grid-column-gap: 0.1em;
    grid-row-gap: 7em;
    font-size: .5em;
    margin-left: 2.3%;
`; 

const CardClick = styled(Card)`
    width: 200px;
    height: 130px;
    margin:auto;
    cursor: pointer; 
        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
            transform: translate(0, -5px);  
        }   
`;

const Img = styled.img`
    margin:15px;
    width: 170px;
    height: 100px;
    object-fit: contain;
`;

const AudioInstrucao = styled(ReactAudioPlayer)`
    margin: 30px;
`;

const AudioCard = styled(ReactAudioPlayer)`
    margin: 5px;
    width: 190px;
    height: 30px;
`;

function ClickImageA(){  
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0); 
    const [color1, setColor1] = useState('#D5D8DC');
    const [color2, setColor2] = useState('#D5D8DC');
    const [color3, setColor3] = useState('#D5D8DC');
    const [color4, setColor4] = useState('#D5D8DC');
    const [color5, setColor5] = useState('#D5D8DC');
    const [color6, setColor6] = useState('#D5D8DC');
    const [color7, setColor7] = useState('#D5D8DC');
    const [color8, setColor8] = useState('#D5D8DC');
    const [color9, setColor9] = useState('#D5D8DC');
    const [color10, setColor10] = useState('#D5D8DC');
    const [color11, setColor11] = useState('#D5D8DC');
    const [color12, setColor12] = useState('#D5D8DC');
       
    function validaAcerto1(){
        setColor1('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro2(){
        setColor2('#F00');
        setErros(erros+1);
    }
    function validaAcerto3(){
        setColor3('#0F0');
        setAcertos(acertos+1);
    }
    function validaAcerto4(){
        setColor4('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro5(){
        setColor5('#F00');
        setErros(erros+1);
    }
    function validaAcerto6(){
        setColor6('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro7(){
        setColor7('#F00');
        setErros(erros+1);
    }
    function validaAcerto8(){
        setColor8('#0F0');
        setAcertos(acertos+1);
    }
    function validaAcerto9(){
        setColor9('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro10(){
        setColor10('#F00');
        setErros(erros+1);
    }
    function validaAcerto11(){
        setColor11('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro12(){
        setColor12('#F00');
        setErros(erros+1);
    }
    

    function contacertos(){
        console.log('Você acertou ' + acertos);
    }

    function contaerros(){
        alert('Você errou ' + erros);
    }

    function sound(){

    }

    return(
        <Layout>
            <Container>
                <AudioInstrucao src={AuClickImageA} controls />                     
                    <Wrapper>
                        <CardClick  onClick={validaAcerto1} style={{borderColor: color1,}}>
                            <Img src={Abacaxi} alt="Abacaxi" /> 
                            <AudioCard src={AuAbacaxi} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro2} style={{borderColor: color2,}}>
                            <Img src={Sino} alt="Sino"/>
                            <AudioCard src={AuSino} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto3} style={{borderColor: color3,}}>
                            <Img src={Abelha} alt="Abelha"/>
                            <AudioCard src={AuAbelha} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto4} style={{borderColor: color4,}}>
                            <Img src={Anel} alt="Anel"/>
                            <AudioCard src={AuAnel} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro5} style={{borderColor: color5,}}>
                            <Img src={Olhos} alt="Olhos"/>
                            <AudioCard src={AuOlhos} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto6} style={{borderColor: color6,}}>
                            <Img src={Apito} alt="Apito"/>
                            <AudioCard src={AuApito} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro7} style={{borderColor: color7,}}>
                            <Img src={Foguete} alt="Foguete"/>
                            <AudioCard src={AuFoguete} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto8} style={{borderColor: color8,}}>
                            <Img src={Aranha} alt="Aranha"/>
                            <AudioCard src={AuAranha} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto9} style={{borderColor: color9,}}>
                            <Img src={Arvore} alt="Arvore"/>
                            <AudioCard src={AuArvore} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro10} style={{borderColor: color10,}}>
                            <Img src={Coelho} alt="Coelho"/>
                            <AudioCard src={AuCoelho} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto11} style={{borderColor: color11,}}>
                            <Img src={Aviao} alt="Aviao"/>
                            <AudioCard src={AuAviao} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro12} style={{borderColor: color12,}}>
                            <Img src={Galinha} alt="Galinha"/>
                            <AudioCard src={AuGalinha} controls></AudioCard>
                        </CardClick>
                        
                    </Wrapper>
            </Container>
            <Link to="/cloudA"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickImageA;