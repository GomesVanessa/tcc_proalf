import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

import ReactAudioPlayer from 'react-audio-player';

import Ovo from '../../../src/Assets/o/ovo.png';
import Violao from '../../../src/Assets/u/violao.png';
import Urubu from '../../../src/Assets/u/urubu.png';
import Limao from '../../../src/Assets/ao/limao.png';
import Xicara from '../../../src/Assets/u/xicara.png';
import Onca from '../../../src/Assets/o/onca.png';
import Tubarao from '../../../src/Assets/u/tubarao.png';
import Vulcao from '../../../src/Assets/u/vulcao.png';
import Coracao from '../../../src/Assets/ao/coracao.png';
import Piao from '../../../src/Assets/ao/piao.png';
import Mesa from '../../../src/Assets/u/mesa.png';
import Mamao from '../../../src/Assets/ao/mamao.png';

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
    margin: 30px;
`;

const AudioCard = styled(ReactAudioPlayer)`
    margin: 5px;
    width: 190px;
    height: 30px;
`;

function ClickImageAO(){  
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
    function validaAcerto8(){
        setColor8('#0F0');
        setAcertos(acertos+1);
    }    
    function validaAcerto9(){
        setColor9('#0F0');
        setAcertos(acertos+1);
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
                <AudioInstrucao controls />                     
                    <Wrapper>
                        <CardClick  onClick={validaErro1} style={{borderColor: color1,}}>
                            <Img src={Ovo} alt="Ovo" /> 
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto2} style={{borderColor: color2,}}>
                            <Img src={Violao} alt="Violao"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro3} style={{borderColor: color3,}}>
                            <Img src={Urubu} alt="Urubu"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto4} style={{borderColor: color4,}}>
                            <Img src={Limao} alt="Limao"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro5} style={{borderColor: color5,}}>
                            <Img src={Xicara} alt="Xicara"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro6} style={{borderColor: color6,}}>
                            <Img src={Onca} alt="Onca"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto7} style={{borderColor: color7,}}>
                            <Img src={Tubarao} alt="Tubarao"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto8} style={{borderColor: color8,}}>
                            <Img src={Vulcao} alt="Vulcao"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto9} style={{borderColor: color9,}}>
                            <Img src={Coracao} alt="Coracao"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto10} style={{borderColor: color10,}}>
                            <Img src={Piao} alt="Piao"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro11} style={{borderColor: color11,}}>
                            <Img src={Mesa} alt="Mesa"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto12} style={{borderColor: color12,}}>
                            <Img src={Mamao} alt="Mamao"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        
                    </Wrapper>
            </Container>
            <Link to=""><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickImageAO;