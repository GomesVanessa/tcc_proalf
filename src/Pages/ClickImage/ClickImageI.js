import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ReactAudioPlayer from 'react-audio-player';

import AuClickImageI from '../../Audios/I/telaClickImageI.mp3';
import AuIndio from '../../Audios/bancoSons/indio.mp3';
import AuEspada from '../../Audios/bancoSons/espada.mp3';
import AuOlho from '../../Audios/bancoSons/olho.mp3';
import AuEspelho from '../../Audios/bancoSons/espelho.mp3';
import AuIlha from '../../Audios/bancoSons/ilha.mp3';
import AuIgreja from '../../Audios/bancoSons/igreja.mp3';
import AuIoio from '../../Audios/bancoSons/ioio.mp3';
import AuPanela from '../../Audios/bancoSons/panela.mp3';
import AuMacaco from '../../Audios/bancoSons/macaco.mp3';
import AuIma from '../../Audios/bancoSons/ima.mp3';
import AuEstrela from '../../Audios/bancoSons/estrela.mp3';
import AuIsqueiro from '../../Audios/bancoSons/isqueiro.mp3';

import Indio from '../../Assets/i/indio.png';
import Espada from '../../Assets/e/espada.png';
import Olhos from '../../Assets/a/olhos.png';
import Espelho from '../../Assets/e/espelho.png';
import Ilha from '../../Assets/i/ilha.png';
import Igreja from '../../Assets/i/igreja.png';
import Ioio from '../../Assets/i/ioio.png';
import Panela from '../../Assets/i/panela.png';
import Macaco from '../../Assets/i/macaco.png';
import Ima from '../../Assets/i/ima.png';
import Estrela from '../../Assets/e/estrela.png';
import Isqueiro from '../../Assets/i/isqueiro.png';

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

function ClickImageI(){  
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
    function validaErro3(){
        setColor3('#F00');
        setErros(erros+1);
    }
    function validaErro4(){
        setColor4('#F00');
        setErros(erros+1);
    }
    function validaAcerto5(){
        setColor5('#0F0');
        setAcertos(acertos+1);
    }
    function validaAcerto6(){
        setColor6('#0F0');
        setAcertos(acertos+1);
    }
    function validaAcerto7(){
        setColor7('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro8(){
        setColor8('#F00');
        setErros(erros+1);
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
                <AudioInstrucao src={AuClickImageI} />
                    <Wrapper>
                        <CardClick onClick={validaAcerto1} style={{borderColor: color1,}}>
                            <Img src={Indio} alt="Indio" />  
                            <AudioCard src={AuIndio} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro2} style={{borderColor: color2,}}>
                            <Img src={Espada} alt="Espada"/>
                            <AudioCard src={AuEspada} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro3} style={{borderColor: color3,}}>
                            <Img src={Olhos} alt="Olhos"/>
                            <AudioCard src={AuOlho} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro4} style={{borderColor: color4,}}>
                            <Img src={Espelho} alt="Espelho"/>
                            <AudioCard src={AuEspelho} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto5} style={{borderColor: color5,}}>
                            <Img src={Ilha} alt="Ilha"/>
                            <AudioCard src={AuIlha} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto6} style={{borderColor: color6,}}>
                            <Img src={Igreja} alt="Igreja"/>
                            <AudioCard src={AuIgreja} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto7} style={{borderColor: color7,}}>
                            <Img src={Ioio} alt="Ioio"/>
                            <AudioCard src={AuIoio} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro8} style={{borderColor: color8,}}>
                            <Img src={Panela} alt="Panela"/>
                            <AudioCard src={AuPanela} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro9} style={{borderColor: color9,}}>
                            <Img src={Macaco} alt="Macaco"/>
                            <AudioCard src={AuMacaco} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto10} style={{borderColor: color10,}}>
                            <Img src={Ima} alt="Ima"/>
                            <AudioCard src={AuIma} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro11} style={{borderColor: color11,}}>
                            <Img src={Estrela} alt="Estrela"/>
                            <AudioCard src={AuEstrela} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto12} style={{borderColor: color12,}}>
                            <Img src={Isqueiro} alt="Isqueiro"/>
                            <AudioCard src={AuIsqueiro} controls></AudioCard>
                        </CardClick>
                        
                    </Wrapper>
            </Container>
            <Link to="/cloudI"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickImageI;