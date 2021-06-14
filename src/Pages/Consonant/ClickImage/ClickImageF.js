import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';

import ReactAudioPlayer from 'react-audio-player';
import Audio1 from '../../../Audio_A/ASOM1.mp3';
import AuAbacaxi from '../../../Audio_A/abacaxi.mp3';
import AuSino from '../../../Audio_A/sino.mp3';
import AuAbelha from '../../../Audio_A/abelha.mp3';
import AuAnel from '../../../Audio_A/anel.mp3';
import AuOlhos from '../../../Audio_A/olho.mp3';
import AuApito from '../../../Audio_A/apito.mp3';
import AuFoguete from '../../../Audio_A/foguete.mp3';
import AuAranha from '../../../Audio_A/aranha.mp3';
import AuArvore from '../../../Audio_A/arvore.mp3';
import AuCoelho from '../../../Audio_A/coelho.mp3';
import AuAviao from '../../../Audio_A/aviao.mp3';
import AuGalinha from '../../../Audio_A/galinha.mp3';

import Ferro from '../../../Assets/consonants/ferro.png';
import Sino from '../../../Assets/a/sino.png';
import Fogueira from '../../../Assets/consonants/fogueira.png';
import Passaro from '../../../Assets/o/passaro.png';
import Onca from '../../../Assets/o/onca.png';
import Faca from '../../../Assets/a/faca.png';
import Olhos from '../../../Assets/o/olho.png';
import Foguete from '../../../Assets/a/foguete.png';
import Folha from '../../../Assets/consonants/folha.png';
import Martelo from '../../../Assets/consonants/martelo.png';
import Funil from '../../../Assets/consonants/funil.png';
import Galinha from '../../../Assets/a/galinha.png';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 240px);
    grid-column-gap: 0.1em;
    grid-row-gap: 7em;
    font-size: .5em;
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
    margin: 40px;
`;

const AudioCard = styled(ReactAudioPlayer)`
    margin: 5px;
    width: 190px;
    height: 30px;
`;

function ClickImageF(){  
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
    function validaErro4(){
        setColor4('#F00');
        setErros(erros+1);
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
                <AudioInstrucao src={Audio1} controls />                     
                    <Wrapper>
                        <CardClick  onClick={validaAcerto1} style={{borderColor: color1,}}>
                            <Img src={Ferro} alt="Ferro" /> 
                            <AudioCard src={AuAbacaxi} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro2} style={{borderColor: color2,}}>
                            <Img src={Sino} alt="Sino"/>
                            <AudioCard src={AuSino} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto3} style={{borderColor: color3,}}>
                            <Img src={Fogueira} alt="Fogueira"/>
                            <AudioCard src={AuAbelha} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro4} style={{borderColor: color4,}}>
                            <Img src={Passaro} alt="Passaro"/>
                            <AudioCard src={AuAnel} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro5} style={{borderColor: color5,}}>
                            <Img src={Onca} alt="Onca"/>
                            <AudioCard src={AuOlhos} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto6} style={{borderColor: color6,}}>
                            <Img src={Faca} alt="Faca"/>
                            <AudioCard src={AuApito} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro7} style={{borderColor: color7,}}>
                            <Img src={Olhos} alt="Olhos"/>
                            <AudioCard src={AuFoguete} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto8} style={{borderColor: color8,}}>
                            <Img src={Foguete} alt="Foguete"/>
                            <AudioCard src={AuAranha} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto9} style={{borderColor: color9,}}>
                            <Img src={Folha} alt="Folha"/>
                            <AudioCard src={AuArvore} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro10} style={{borderColor: color10,}}>
                            <Img src={Martelo} alt="Martelo"/>
                            <AudioCard src={AuCoelho} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto11} style={{borderColor: color11,}}>
                            <Img src={Funil} alt="Funil"/>
                            <AudioCard src={AuAviao} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro12} style={{borderColor: color12,}}>
                            <Img src={Galinha} alt="Galinha"/>
                            <AudioCard src={AuGalinha} controls></AudioCard>
                        </CardClick>
                        
                    </Wrapper>
            </Container>
            <Link to="/readF"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickImageF;