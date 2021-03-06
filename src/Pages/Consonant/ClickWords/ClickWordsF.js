import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';

import ReactAudioPlayer from 'react-audio-player';

import Faca from '../../../Assets/consonants/F/faca.JPG';
import Foca from '../../../Assets/consonants/F/foca.JPG';
import Feijao from '../../../Assets/consonants/F/feijao.JPG';
import Fino from '../../../Assets/consonants/F/fino.JPG';
import Fala from '../../../Assets/consonants/F/fala.JPG';
import Fulana from '../../../Assets/consonants/F/fulana.JPG';
import Fazenda from '../../../Assets/consonants/F/fazenda.JPG';
import Afiada from '../../../Assets/consonants/F/afiada.JPG';
import Felipe from '../../../Assets/consonants/F/felipe.JPG';
import Feliz from '../../../Assets/consonants/F/feliz.JPG';
import Gato from '../../../Assets/consonants/F/gato.JPG';
import Camiseta from '../../../Assets/consonants/F/camiseta.JPG';
import Mesa from '../../../Assets/consonants/F/mesa.jpg';
import Fofo from '../../../Assets/consonants/F/fofo.jpg';
import Mala from '../../../Assets/consonants/F/mala.jpg';
import Fuba from '../../../Assets/consonants/F/fuba.jpg';

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


function ClickWordsF(){  
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
    function validaErro12(){
        setColor12('#F00');
        setErros(erros+1);
    }
    function validaErro13(){
        setColor13('#F00');
        setErros(erros+1);
    }
    function validaAcerto14(){
        setColor14('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro15(){
        setColor15('#F00');
        setErros(erros+1);
    }
    function validaAcerto16(){
        setColor16('#0F0');
        setAcertos(acertos+1);
    }
 
    function contacertos(){
        console.log('Voc?? acertou ' + acertos);
    }

    function contaerros(){
        alert('Voc?? errou ' + erros);
    }

    return(
        <Layout>
            <Container>
                <AudioInstrucao controls />
                    <Wrapper>
                        <CardClick onClick={validaAcerto1} style={{borderColor: color1,}}>
                            <Img src={Faca} alt="Faca" />  
                        </CardClick>
                        <CardClick onClick={validaAcerto2} style={{borderColor: color2,}}>
                            <Img src={Foca} alt="Foca"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto3} style={{borderColor: color3,}}>
                            <Img src={Feijao} alt="Feijao"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto4} style={{borderColor: color4,}}>
                            <Img src={Fino} alt="Fino"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto5} style={{borderColor: color5,}}>
                            <Img src={Fala} alt="Fala"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto6} style={{borderColor: color6,}}>
                            <Img src={Fulana} alt="Fulana"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto7} style={{borderColor: color7,}}>
                            <Img src={Fazenda} alt="Fazenda"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto8} style={{borderColor: color8,}}>
                            <Img src={Afiada} alt="Afiada"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto9} style={{borderColor: color9,}}>
                            <Img src={Felipe} alt="Felipe"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto10} style={{borderColor: color10,}}>
                            <Img src={Feliz} alt="Feliz"/>
                        </CardClick>
                        <CardClick onClick={validaErro11} style={{borderColor: color11,}}>
                            <Img src={Gato} alt="Gato"/>
                        </CardClick>
                        <CardClick onClick={validaErro12} style={{borderColor: color12,}}>
                            <Img src={Camiseta} alt="Camiseta"/>
                        </CardClick> 
                        <CardClick onClick={validaErro13} style={{borderColor: color13,}}>
                            <Img src={Mesa} alt="Mesa"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto14} style={{borderColor: color14,}}>
                            <Img src={Fofo} alt="Fofo"/>
                        </CardClick>
                        <CardClick onClick={validaErro15} style={{borderColor: color15,}}>
                            <Img src={Mala} alt="Mala"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto16} style={{borderColor: color16,}}>
                            <Img src={Fuba} alt="Fuba"/>
                        </CardClick>                       
                    </Wrapper>
            </Container>
            <Link to="/jMenu"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickWordsF;