import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ReactAudioPlayer from 'react-audio-player';
import AuClickLetterE from '../../Audios/E/telaClickLetterE.mp3';
import E from '../../../src/Assets/letters/E.JPG';
import ami from '../../../src/Assets/letters/ami.JPG';
import e_cur from '../../../src/Assets/letters/e_cur.JPG';
import emi from '../../../src/Assets/letters/emi.JPG';
import dmi from '../../../src/Assets/letters/dmi.JPG';
import A from '../../../src/Assets/letters/A.JPG';
import F from '../../../src/Assets/letters/F.JPG';
import P from '../../../src/Assets/letters/P.JPG';
import umi from '../../../src/Assets/letters/umi.JPG';
import acur from '../../../src/Assets/letters/acur.JPG';
import ecur from '../../../src/Assets/letters/ecur.JPG';
import a_cur from '../../../src/Assets/letters/a_cur.JPG';
import imi from '../../Assets/letters/imi.JPG';
import Ee from '../../Assets/representacao/Ee.jpg';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 200px);
    grid-column-gap: 0.1em;
    grid-row-gap: 1.5em;
    font-size: .5em;
    margin:20px;
    margin-left: 1%;
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
    margin: 20px;
`;

const Representation = styled.div` 
    text-align: center;
`;

const ImgA = styled.img` 
    height: 80px;
`;


function ClickLetterE(){  
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
    const [color17, setColor17] = useState('#D5D8DC');
    const [color18, setColor18] = useState('#D5D8DC');
    const [color19, setColor19] = useState('#D5D8DC');
    const [color20, setColor20] = useState('#D5D8DC');
    
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
    function validaAcerto4(){
        setColor4('#0F0');
        setAcertos(acertos+1);
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
    function validaAcerto15(){
        setColor15('#0F0');
        setAcertos(acertos+1);
    }
    function validaAcerto16(){
        setColor16('#0F0');
        setAcertos(acertos+1);
    }
    function validaAcerto17(){
        setColor17('#0F0');
        setAcertos(acertos+1);
    }
    function validaAcerto18(){
        setColor18('#0F0');
        setAcertos(acertos+1);
    }
    function validaAcerto19(){
        setColor19('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro20(){
        setColor20('#F00');
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
                <AudioInstrucao src={AuClickLetterE} controls />

                <Representation>
                    <ImgA src={Ee} alt="E" />
                </Representation>  

                    <Wrapper>
                        <CardClick onClick={validaAcerto1} style={{borderColor: color1,}}>
                            <Img src={E} alt="E" />  
                        </CardClick>
                        <CardClick onClick={validaErro2} style={{borderColor: color2,}}>
                            <Img src={ami} alt="A"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto3} style={{borderColor: color3,}}>
                            <Img src={e_cur} alt="E"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto4} style={{borderColor: color4,}}>
                            <Img src={emi} alt="E"/>
                        </CardClick>
                        <CardClick onClick={validaErro5} style={{borderColor: color5,}}>
                            <Img src={ami} alt="A"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto6} style={{borderColor: color6,}}>
                            <Img src={emi} alt="E"/>
                        </CardClick>
                        <CardClick onClick={validaErro7} style={{borderColor: color7,}}>
                            <Img src={dmi} alt="D"/>
                        </CardClick>
                        <CardClick onClick={validaErro8} style={{borderColor: color8,}}>
                            <Img src={A} alt="A"/>
                        </CardClick>
                        <CardClick onClick={validaErro9} style={{borderColor: color9,}}>
                            <Img src={A} alt="A"/>
                        </CardClick>
                        <CardClick onClick={validaErro10} style={{borderColor: color10,}}>
                            <Img src={F} alt="F"/>
                        </CardClick>
                        <CardClick onClick={validaErro11} style={{borderColor: color11,}}>
                            <Img src={ami} alt="A"/>
                        </CardClick>
                        <CardClick onClick={validaErro12} style={{borderColor: color12,}}>
                            <Img src={P} alt="P"/>
                        </CardClick>
                        <CardClick onClick={validaErro13} style={{borderColor: color13,}}>
                            <Img src={umi} alt="U"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto14} style={{borderColor: color14,}}>
                            <Img src={emi} alt="E"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto15} style={{borderColor: color15,}}>
                            <Img src={E} alt="E"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto16} style={{borderColor: color16,}}>
                            <Img src={E} alt="E"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto17} style={{borderColor: color17,}}>
                            <Img src={emi} alt="E"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto18} style={{borderColor: color18,}}>
                            <Img src={emi} alt="E"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto19} style={{borderColor: color19,}}>
                            <Img src={ecur} alt="E"/>
                        </CardClick>
                        <CardClick onClick={validaErro20} style={{borderColor: color20,}}>
                            <Img src={imi} alt="I"/>
                        </CardClick>
                    </Wrapper>
            </Container>
            <Link to="/typeLetterE"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickLetterE;