import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ReactAudioPlayer from 'react-audio-player';

import AuClickImageE from '../../Audios/E/telaClickImageE.mp3';
import AuElefante from '../../Audios/bancoSons/elefante.mp3';
import AuAbelha from '../../Audios/bancoSons/abelha.mp3';
import AuEscova from '../../Audios/bancoSons/escova.mp3';
import AuApito from '../../Audios/bancoSons/apito.mp3';
import AuEspada from '../../Audios/bancoSons/espada.mp3';
import AuDedo from '../../Audios/bancoSons/dedo.mp3';
import AuOlho from '../../Audios/bancoSons/olho.mp3';
import AuEspelho from '../../Audios/bancoSons/espelho.mp3';
import AuAviao from '../../Audios/bancoSons/aviao.mp3';
import AuEstrela from '../../Audios/bancoSons/estrela.mp3';
import AuPorco from '../../Audios/bancoSons/porco.mp3';
import AuEsquilo from '../../Audios/bancoSons/esquilo.mp3';

import Elefante from '../../Assets/e/elefante.png';
import Abelha from '../../Assets/a/abelha.png';
import Escova from '../../Assets/e/escova.png';
import Apito from '../../Assets/a/apito.png';
import Espada from '../../Assets/e/espada.png';
import Dedo from '../../Assets/e/dedo.png';
import Olhos from '../../Assets/a/olhos.png';
import Espelho from '../../Assets/e/espelho.png';
import Aviao from '../../Assets/a/aviao.png';
import Porco from '../../Assets/o/porco.png';
import Esquilo from '../../Assets/e/esquilo.png';
import Estrela from '../../Assets/e/estrela.png';

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

function ClickImageE(){  
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
    function validaAcerto5(){
        setColor5('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro6(){
        setColor6('#F00');
        setErros(erros+1);
    }
    function validaErro7(){
        setColor7('#F00');
        setErros(erros+1);
    }
    function validaAcerto8(){
        setColor8('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro9(){
        setColor9('#F00');
        setErros(erros+1);
    }
    function validaAcerto10(){
        setColor10('#0F0');
        setAcertos(acertos+1);
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
                <AudioInstrucao src={AuClickImageE} controls/>
                    <Wrapper>
                        <CardClick onClick={validaAcerto1} style={{borderColor: color1,}}>
                            <Img src={Elefante} alt="Elefante" />  
                            <AudioCard src={AuElefante} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro2} style={{borderColor: color2,}}>
                            <Img src={Abelha} alt="Abelha"/>
                            <AudioCard src={AuAbelha} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto3} style={{borderColor: color3,}}>
                            <Img src={Escova} alt="Escova"/>
                            <AudioCard src={AuEscova} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro4} style={{borderColor: color4,}}>
                            <Img src={Apito} alt="Apito"/>
                            <AudioCard src={AuApito} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto5} style={{borderColor: color5,}}>
                            <Img src={Espada} alt="Espada"/>
                            <AudioCard src={AuEspada} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro6} style={{borderColor: color6,}}>
                            <Img src={Dedo} alt="Dedo"/>
                            <AudioCard src={AuDedo} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro7} style={{borderColor: color7,}}>
                            <Img src={Olhos} alt="Olhos"/>
                            <AudioCard src={AuOlho} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto8} style={{borderColor: color8,}}>
                            <Img src={Espelho} alt="Espelho"/>
                            <AudioCard src={AuEspelho} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro9} style={{borderColor: color9,}}>
                            <Img src={Aviao} alt="Aviao"/>
                            <AudioCard src={AuAviao} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto10} style={{borderColor: color10,}}>
                            <Img src={Estrela} alt="Estrela"/>
                            <AudioCard src={AuEstrela} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro11} style={{borderColor: color11,}}>
                            <Img src={Porco} alt="Porco"/>
                            <AudioCard src={AuPorco} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto12} style={{borderColor: color12,}}>
                            <Img src={Esquilo} alt="Esquilo"/>
                            <AudioCard src={AuEsquilo} controls></AudioCard>
                        </CardClick>
                        
                    </Wrapper>
            </Container>
            <Link to="/cloudE"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickImageE;