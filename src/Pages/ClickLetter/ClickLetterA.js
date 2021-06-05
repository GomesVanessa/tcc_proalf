import React from 'react';
import {useState} from 'react';
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import CardImage from '../../components/Card/CardImage';
import Card from '../../components/Card/Card';
//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import A from '../../../src/Assets/letters/A.JPG';
import ami from '../../../src/Assets/letters/ami.JPG';
import a_cur from '../../../src/Assets/letters/a_cur.JPG';
import omi from '../../../src/Assets/letters/omi.JPG';
import bmi from '../../../src/Assets/letters/bmi.JPG';
import dmi from '../../../src/Assets/letters/dmi.JPG';
import I from '../../../src/Assets/letters/I.JPG';
import P  from '../../../src/Assets/letters/P.JPG';
import umi from '../../../src/Assets/letters/umi.JPG';
import emi from '../../../src/Assets/letters/emi.JPG';
import acur from '../../../src/Assets/letters/acur.JPG';

import Aa from '../../Assets/representacao/Aa.jpg';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 200px);
    grid-column-gap: 0.1em;
    grid-row-gap: 1.5em;
    font-size: .5em;
`; 

const CardClick = styled(Card)`
    
    margin:auto;
    cursor: pointer; 
        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
            transform: translate(0, -5px);  
        }   
`;

const Img = styled.img`
    width: 130px;
    height: 90px; 
    object-fit: contain;
`;

const AudioInstrucao = styled(Audio)`
    margin: 30px;
`;

const Representation = styled.div` 
    text-align: center;
    margin: 20px;
`;

const ImgA = styled.img` 
    height: 60px;
`;


function ClickLetterA(){  
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0); 
    const [color1, setColor1] = useState('#000');
    const [color2, setColor2] = useState('#000');
    const [color3, setColor3] = useState('#000');
    const [color4, setColor4] = useState('#000');
    const [color5, setColor5] = useState('#000');
    const [color6, setColor6] = useState('#000');
    const [color7, setColor7] = useState('#000');
    const [color8, setColor8] = useState('#000');
    const [color9, setColor9] = useState('#000');
    const [color10, setColor10] = useState('#000');

    function validaAcerto1(){
        setColor1('#0F0');
        setAcertos(acertos+1);
    }
    function validaAcerto2(){
        setColor2('#0F0');
        setAcertos(acertos+1);
    }
    function validaAcerto3(){
        setColor3('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro1(){
        setColor1('#F00');
        setErros(erros+1);
    }





    function contacertos(){
        //console.log(acertos);
        alert('Você acertou ' + acertos);
    }

    function contaerros(){
        //console.log(acertos);
        alert('Você errou ' + erros);
    }

    return(
        <Layout>
            <Container>
                <AudioInstrucao />

                <Representation>
                    <ImgA src={Aa} alt="A"/>
                </Representation>  

                    <Wrapper>
                        <CardClick onClick={validaAcerto1} style={{borderColor: color1,}}>
                            <Img src={A} alt="A" />  
                        </CardClick>
                        <CardClick>
                            <Img src={ami} alt="A"/>
                        </CardClick>
                        <CardClick>
                            <Img src={a_cur} alt="A"/>
                        </CardClick>
                        <CardClick>
                            <Img src={omi} alt="O"/>
                        </CardClick>
                        <CardClick>
                            <Img src={A} alt="A"/>
                        </CardClick>
                        <CardClick>
                            <Img src={bmi} alt="B"/>
                        </CardClick>
                        <CardClick>
                            <Img src={dmi} alt="D"/>
                        </CardClick>
                        <CardClick>
                            <Img src={A} alt="A"/>
                        </CardClick>
                        <CardClick>
                            <Img src={a_cur} alt="A"/>
                        </CardClick>
                        <CardClick>
                            <Img src={I} alt="I"/>
                        </CardClick>
                        <CardClick>
                            <Img src={ami} alt="A"/>
                        </CardClick>
                        <CardClick>
                            <Img src={P} alt="P"/>
                        </CardClick>
                        <CardClick>
                            <Img src={umi} alt="U"/>
                        </CardClick>
                        <CardClick>
                            <Img src={emi} alt="E"/>
                        </CardClick>
                        <CardClick>
                            <Img src={acur} alt="A"/>
                        </CardClick>
                        <CardClick>
                            <Img src={P} alt="P"/>
                        </CardClick>
                        <CardClick>
                            <Img src={umi} alt="U"/>
                        </CardClick>
                        <CardClick>
                            <Img src={emi} alt="E"/>
                        </CardClick>
                        <CardClick>
                            <Img src={acur} alt="A"/>
                        </CardClick>
                        <CardClick>
                            <Img src={acur} alt="A"/>
                        </CardClick>
                    </Wrapper>
            </Container>
            <Link to="/enterLetterA"><Button onClick={contaerros}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickLetterA;