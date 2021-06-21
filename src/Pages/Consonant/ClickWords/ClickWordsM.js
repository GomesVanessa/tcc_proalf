import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';

import ReactAudioPlayer from 'react-audio-player';

import Mola from '../../../Assets/consonants/M/mola.JPG';
import Menina from '../../../Assets/consonants/M/menina.JPG';
import Mamao from '../../../Assets/consonants/M/mamao.JPG';
import Filme from '../../../Assets/consonants/M/filme.JPG';
import Maria from '../../../Assets/consonants/M/maria.JPG';
import Fulana from '../../../Assets/consonants/M/fulana.JPG';
import Fazenda from '../../../Assets/consonants/M/fazenda.JPG';
import Mel from '../../../Assets/consonants/M/mel.JPG';
import Foca from '../../../Assets/consonants/M/foca.JPG';
import Melao from '../../../Assets/consonants/M/melao.JPG';
import Gata from '../../../Assets/consonants/M/gata.JPG';
import Camiseta from '../../../Assets/consonants/M/camiseta.JPG';
import Mesa from '../../../Assets/consonants/M/mesa.JPG';
import Medica from '../../../Assets/consonants/M/medica.JPG';
import Mala from '../../../Assets/consonants/M/mala.JPG';
import Fuba from '../../../Assets/consonants/M/fuba.JPG';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.5em;
    grid-row-gap: 2em;
    font-size: .5em;
    margin:20px;
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
    width: 160px;
    height: 90px;
    object-fit: contain;
`;

const AudioInstrucao = styled(ReactAudioPlayer)`
    margin: 30px;
`;


function ClickWordsJ(){  
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
    const [color13, setColor13] = useState('#D5D8DC');
    const [color14, setColor14] = useState('#D5D8DC');
    const [color15, setColor15] = useState('#D5D8DC');
    const [color16, setColor16] = useState('#D5D8DC'); 
    
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
    function validaAcerto4(){
        setColor4('#0F0');
        setAcertos(acertos+1);
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
    function validaAcerto13(){
        setColor13('#0F0');
        setAcertos(acertos+1);
    }
    function validaAcerto14(){
        setColor14('#0F0');
        setAcertos(acertos+1);
    }    
    function validaAcerto15(){
        setColor15('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro16(){
        setColor16('#F00');
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
                <AudioInstrucao controls />
                    <Wrapper>
                        <CardClick onClick={validaAcerto1} style={{borderColor: color1,}}>
                            <Img src={Mola} alt="Mola" />  
                        </CardClick>
                        <CardClick onClick={validaAcerto2} style={{borderColor: color2,}}>
                            <Img src={Menina} alt="Menina"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto3} style={{borderColor: color3,}}>
                            <Img src={Mamao} alt="Mamao"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto4} style={{borderColor: color4,}}>
                            <Img src={Filme} alt="Filme"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto5} style={{borderColor: color5,}}>
                            <Img src={Maria} alt="Maria"/>
                        </CardClick>
                        <CardClick onClick={validaErro6} style={{borderColor: color6,}}>
                            <Img src={Fulana} alt="Fulana"/>
                        </CardClick>
                        <CardClick onClick={validaErro7} style={{borderColor: color7,}}>
                            <Img src={Fazenda} alt="Fazenda"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto8} style={{borderColor: color8,}}>
                            <Img src={Mel} alt="Mel"/>
                        </CardClick>
                        <CardClick onClick={validaErro9} style={{borderColor: color9,}}>
                            <Img src={Foca} alt="Foca"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto10} style={{borderColor: color10,}}>
                            <Img src={Melao} alt="Melao"/>
                        </CardClick>
                        <CardClick onClick={validaErro11} style={{borderColor: color11,}}>
                            <Img src={Gata} alt="Gata"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto12} style={{borderColor: color12,}}>
                            <Img src={Camiseta} alt="Camiseta"/>
                        </CardClick> 
                        <CardClick onClick={validaAcerto13} style={{borderColor: color13,}}>
                            <Img src={Mesa} alt="Mesa"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto14} style={{borderColor: color14,}}>
                            <Img src={Medica} alt="Medica"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto15} style={{borderColor: color15,}}>
                            <Img src={Mala} alt="Mala"/>
                        </CardClick>
                        <CardClick onClick={validaErro16} style={{borderColor: color16,}}>
                            <Img src={Fuba} alt="Fuba"/>
                        </CardClick>                       
                    </Wrapper>
            </Container>
            <Link to="/typeConsonantsM"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickWordsJ;