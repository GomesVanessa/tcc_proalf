import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';

import ReactAudioPlayer from 'react-audio-player';

import Jacare from '../../../Assets/consonants/J/jacare.JPG';
import Feijao from '../../../Assets/consonants/F/feijao.JPG';
import Jiboia from '../../../Assets/consonants/J/jiboia.JPG';
import Jose from '../../../Assets/consonants/J/jose.JPG';
import Julia from '../../../Assets/consonants/J/julia.JPG';
import Caju from '../../../Assets/consonants/J/caju.JPG';
import Janela from '../../../Assets/consonants/J/janela.JPG';
import Pedra from '../../../Assets/consonants/J/pedra.JPG';
import Mapa from '../../../Assets/consonants/J/mapa.JPG';
import Bolsa from '../../../Assets/consonants/J/bolsa.JPG';
import Unha from '../../../Assets/consonants/J/unha.jpg';
import Estojo from '../../../Assets/consonants/J/estojo.JPG';
import Jogo from '../../../Assets/consonants/J/jogo.JPG';
import Chinelo from '../../../Assets/consonants/J/chinelo.JPG';
import Agua from '../../../Assets/consonants/J/agua.JPG';
import Computador from '../../../Assets/consonants/J/computador.JPG';


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
    function validaAcerto13(){
        setColor13('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro14(){
        setColor14('#F00');
        setErros(erros+1);
    }    
    function validaErro15(){
        setColor15('#F00');
        setErros(erros+1);
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
                            <Img src={Jacare} alt="Jacare" />  
                        </CardClick>
                        <CardClick onClick={validaAcerto2} style={{borderColor: color2,}}>
                            <Img src={Feijao} alt="Feijao"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto3} style={{borderColor: color3,}}>
                            <Img src={Jiboia} alt="Jiboia"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto4} style={{borderColor: color4,}}>
                            <Img src={Jose} alt="Jose"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto5} style={{borderColor: color5,}}>
                            <Img src={Julia} alt="Julia"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto6} style={{borderColor: color6,}}>
                            <Img src={Caju} alt="Caju"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto7} style={{borderColor: color7,}}>
                            <Img src={Janela} alt="Janela"/>
                        </CardClick>
                        <CardClick onClick={validaErro8} style={{borderColor: color8,}}>
                            <Img src={Pedra} alt="Pedra"/>
                        </CardClick>
                        <CardClick onClick={validaErro9} style={{borderColor: color9,}}>
                            <Img src={Mapa} alt="Mapa"/>
                        </CardClick>
                        <CardClick onClick={validaErro10} style={{borderColor: color10,}}>
                            <Img src={Bolsa} alt="Bolsa"/>
                        </CardClick>
                        <CardClick onClick={validaErro11} style={{borderColor: color11,}}>
                            <Img src={Unha} alt="Unha"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto12} style={{borderColor: color12,}}>
                            <Img src={Estojo} alt="Estojo"/>
                        </CardClick> 
                        <CardClick onClick={validaAcerto13} style={{borderColor: color13,}}>
                            <Img src={Jogo} alt="Jogo"/>
                        </CardClick>
                        <CardClick onClick={validaErro14} style={{borderColor: color14,}}>
                            <Img src={Chinelo} alt="Chinelo"/>
                        </CardClick>
                        <CardClick onClick={validaErro15} style={{borderColor: color15,}}>
                            <Img src={Agua} alt="Agua"/>
                        </CardClick>
                        <CardClick onClick={validaErro16} style={{borderColor: color16,}}>
                            <Img src={Computador} alt="Computador"/>
                        </CardClick>                       
                    </Wrapper>
            </Container>
            <Link to="readJ"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickWordsJ;