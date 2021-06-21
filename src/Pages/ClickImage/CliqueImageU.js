import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ReactAudioPlayer from 'react-audio-player';

import AuClickImageU from '../../Audios/U/telaClickImageU.mp3';
import AuOvo from '../../Audios/bancoSons/ovo.mp3';
import AuUva from '../../Audios/bancoSons/uva.mp3';
import AuZebra from '../../Audios/bancoSons/zebra.mp3';
import AuUrso from '../../Audios/bancoSons/urso.mp3';
import AuTaca from '../../Audios/bancoSons/taca.mp3';
import AuOsso from '../../Audios/bancoSons/osso.mp3';
import AuUnha from '../../Audios/bancoSons/unha.mp3';
import AuXicara from '../../Audios/bancoSons/xicara.mp3';
import AuUrubu from '../../Audios/bancoSons/urubu.mp3';
import AuViolao from '../../Audios/bancoSons/violao.mp3';
import AuAranha from '../../Audios/bancoSons/aranha.mp3';
import AuMesa from '../../Audios/bancoSons/mesa.mp3';

import Ovo from '../../Assets/o/ovo.png';
import Uva from '../../Assets/u/uva.png';
import Zebra from '../../Assets/u/zebra.png';
import Urso from '../../Assets/u/urso.png';
import Taca from '../../Assets/u/taca.png';
import Osso from '../../Assets/o/osso.png';
import Unha from '../../Assets/u/unha.png';
import Xicara from '../../Assets/u/xicara.png';
import Urubu from '../../Assets/u/urubu.png';
import Violao from '../../Assets/u/violao.png';
import Aranha from '../../Assets/a/aranha.png';
import Mesa from '../../Assets/u/mesa.png';


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

function ClickImageU(){  
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
       
    function validaErro1(){
        setColor1('#F00');
        setErros(erros+1);
    }
    function validaAcerto2(){
        setColor2('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro3(){
        setColor3('#F00');
        setErros(erros+1);
    }
    function validaAcerto4(){
        setColor4('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro5(){
        setColor5('#F00');
        setErros(erros+1);
    }
    function validaErro6(){
        setColor6('#F00');
        setErros(erros+1);
    }
    function validaAcerto7(){
        setColor7('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro8(){
        setColor8('#F00');
        setErros(erros+1);
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

    return(
        <Layout>
            <Container>
                <AudioInstrucao src={AuClickImageU} />
                    <Wrapper>
                        <CardClick onClick={validaErro1} style={{borderColor: color1,}}>
                            <Img src={Ovo} alt="Ovo" />  
                            <AudioCard src={AuOvo} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto2} style={{borderColor: color2,}}>
                            <Img src={Uva} alt="Uva"/>
                            <AudioCard src={AuUva} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro3} style={{borderColor: color3,}}>
                            <Img src={Zebra} alt="Zebra"/>
                            <AudioCard src={AuZebra} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto4} style={{borderColor: color4,}}>
                            <Img src={Urso} alt="Urso"/>
                            <AudioCard src={AuUrso} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro5} style={{borderColor: color5,}}>
                            <Img src={Taca} alt="Taca"/>
                            <AudioCard src={AuTaca} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro6} style={{borderColor: color6,}}>
                            <Img src={Osso} alt="Osso"/>
                            <AudioCard src={AuOsso} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto7} style={{borderColor: color7,}}>
                            <Img src={Unha} alt="Unha"/>
                            <AudioCard src={AuUnha} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro8} style={{borderColor: color8,}}>
                            <Img src={Xicara} alt="Xicara"/>
                            <AudioCard src={AuXicara} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto9} style={{borderColor: color9,}}>
                            <Img src={Urubu} alt="Urubu"/>
                            <AudioCard src={AuUrubu} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro10} style={{borderColor: color10,}}>
                            <Img src={Violao} alt="Violao"/>
                            <AudioCard src={AuViolao} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro11} style={{borderColor: color11,}}>
                            <Img src={Aranha} alt="Aranha"/>
                            <AudioCard src={AuAranha} controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro12} style={{borderColor: color12,}}>
                            <Img src={Mesa} alt="Mesa"/>
                            <AudioCard src={AuMesa} controls></AudioCard>
                        </CardClick>
                        
                    </Wrapper>
            </Container>
            <Link to="/cloudU"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickImageU;