import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import Ema from '../../../src/Assets/cloud/ema.JPG'; 
import Uva from '../../../src/Assets/cloud/uva.JPG'; 
import Anel from '../../../src/Assets/cloud/anel.JPG'; 
import Soco from '../../../src/Assets/cloud/soco.JPG'; 
import Estrela from '../../../src/Assets/cloud/estrela.JPG'; 
import Eu from '../../../src/Assets/cloud/eu.JPG'; 

const Wrapper = styled.div`
    //background-color: lightskyblue;
    display: grid;
    grid-template-columns: repeat(3, 280px);
    grid-column-gap: 4em;
    grid-row-gap: 4em;
    //font-size: .6em;    
`; 

const CardClick = styled(Card)`
    cursor: pointer; 
        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
            transform: translate(0, -5px);  
        } 
`;

const Img = styled.img`
    width: 260px;
    height: 150px; 
    object-fit: contain;
    
`;

const AudioInstrucao = styled(Audio)`
    margin: 60px;
`;


function CloudE(){  
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0); 
    const [color1, setColor1] = useState('#D5D8DC');
    const [color2, setColor2] = useState('#D5D8DC');
    const [color3, setColor3] = useState('#D5D8DC');
    const [color4, setColor4] = useState('#D5D8DC');
    const [color5, setColor5] = useState('#D5D8DC');
    const [color6, setColor6] = useState('#D5D8DC');
    
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
    function contacertos(){
        console.log('Você acertou ' + acertos);

    }
    function contaerros(){
        alert('Você errou ' + erros);
    }

    return(
        <Layout>
            <Container>
                <AudioInstrucao />
                    <Wrapper>
                        <CardClick onClick={validaAcerto1} style={{borderColor: color1,}}>
                            <Img src={Ema} alt="Ema" />  
                        </CardClick>
                        <CardClick onClick={validaErro2} style={{borderColor: color2,}}>
                            <Img src={Uva} alt="Uva"/>
                        </CardClick>
                        <CardClick onClick={validaErro3} style={{borderColor: color3,}}>
                            <Img src={Anel} alt="Anel"/>
                        </CardClick>
                        <CardClick onClick={validaErro4} style={{borderColor: color4,}}>
                            <Img src={Soco} alt="Soco"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto5} style={{borderColor: color5,}}>
                            <Img src={Estrela} alt="Estrela"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto6} style={{borderColor: color6,}}>
                            <Img src={Eu} alt="Eu"/>
                        </CardClick>                       
                    </Wrapper>
            </Container>
            <Link to="/clickLetterE"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>    
    );
}

export default CloudE;