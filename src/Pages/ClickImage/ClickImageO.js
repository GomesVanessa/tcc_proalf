import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ReactAudioPlayer from 'react-audio-player';

import AuClickImageO from '../../Audios/O/telaClickImageO.mp3';
import AuOvo from '../../Audios/bancoSons/ovo.mp3';
import AuIma from '../../Audios/bancoSons/ima.mp3';
import AuOlho from '../../Audios/bancoSons/olho.mp3';
import AuPassaro from '../../Audios/bancoSons/passaro.mp3';
import AuBota from '../../Audios/bancoSons/bota.mp3';
import AuOnibus from '../../Audios/bancoSons/onibus.mp3';
import AuCinto from '../../Audios/bancoSons/cinto.mp3';
import AuOnca from '../../Audios/bancoSons/onca.mp3';
import AuOsso from '../../Audios/bancoSons/osso.mp3';
import AuPe from '../../Audios/bancoSons/pe.mp3';
import AuAranha from '../../Audios/bancoSons/aranha.mp3';
import AuOvelha from '../../Audios/bancoSons/ovelha.mp3';

import Ovo from '../../Assets/o/ovo.png';
import Ima from '../../Assets/i/ima.png';
import Olhos from '../../Assets/o/olho.png';
import Passaro from '../../Assets/o/passaro.png';
import Bota from '../../Assets/o/bota.png';
import Onibus from '../../Assets/o/onibus.png';
import Cinto from '../../Assets/o/cinto.png';
import Onca from '../../Assets/o/onca.png';
import Osso from '../../Assets/o/osso.png';
import Pe from '../../Assets/o/pe.png';
import Aranha from '../../Assets/a/aranha.png';
import Ovelha from '../../Assets/o/ovelha.png';


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

const AudioInstrucao = styled(Audio)`
    margin: 30px;
`;

const AudioCard = styled(ReactAudioPlayer)`
    margin: 5px;
    width: 190px;
    height: 30px;
`;

function ClickImageO(){  
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
    function validaErro11(){
        setColor11('#F00');
        setErros(erros+1);
    }
    function validaAcerto12(){
        setColor12('#0F0');
        setAcertos(acertos+1);
    }
    

    function contacertos(){
        console.log('Você acertou ' + acertos);
    }
    function contaerros(){
        alert('Você errou ' + erros);
    }

    return(
        <Layout>
            <Container>
                <AudioInstrucao  src={AuClickImageO} />
                    <Wrapper>
                        <CardClick onClick={validaAcerto1} style={{borderColor: color1,}}>
                            <Img src={Ovo} alt="Ovo" />  
                            <AudioCard src={AuOvo} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro2} style={{borderColor: color2,}}>
                            <Img src={Ima} alt="Ima"/>
                            <AudioCard src={AuIma} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto3} style={{borderColor: color3,}}>
                            <Img src={Olhos} alt="Olhos"/>
                            <AudioCard src={AuOlho} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro4} style={{borderColor: color4,}}>
                            <Img src={Passaro} alt="Passaro"/>
                            <AudioCard src={AuPassaro} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro5} style={{borderColor: color5,}}>
                            <Img src={Bota} alt="Bota"/>
                            <AudioCard src={AuBota} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto6} style={{borderColor: color6,}}>
                            <Img src={Onibus} alt="Onibus"/>
                            <AudioCard src={AuOnibus} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro7} style={{borderColor: color7,}}>
                            <Img src={Cinto} alt="Cinto"/>
                            <AudioCard src={AuCinto} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto8} style={{borderColor: color8,}}>
                            <Img src={Onca} alt="Onca"/>
                            <AudioCard src={AuOnca} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto9} style={{borderColor: color9,}}>
                            <Img src={Osso} alt="Osso"/>
                            <AudioCard src={AuOsso} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro10} style={{borderColor: color10,}}>
                            <Img src={Pe} alt="Pe"/>
                            <AudioCard src={AuPe} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro11} style={{borderColor: color11,}}>
                            <Img src={Aranha} alt="Aranha"/>
                            <AudioCard src={AuAranha} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto12} style={{borderColor: color12,}}>
                            <Img src={Ovelha} alt="Ovelha"/>
                            <AudioCard src={AuOvelha} controls></AudioCard>
                        </CardClick>
                        
                    </Wrapper>
            </Container>
            <Link to="/cloudO"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickImageO;