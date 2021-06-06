import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import omi from '../../../src/Assets/letters/omi.JPG';
import ami from '../../../src/Assets/letters/ami.JPG';
import u_cur from '../../../src/Assets/letters/u_cur.JPG';
import o_cur from '../../../src/Assets/letters/o_cur.JPG';
import I from '../../../src/Assets/letters/I.JPG';
import U from '../../../src/Assets/letters/U.JPG';
import A from '../../../src/Assets/letters/A.JPG';
import umi from '../../../src/Assets/letters/umi.JPG';
import Q from '../../../src/Assets/letters/Q.JPG';
import Z from '../../../src/Assets/letters/Z.JPG';
import ucur from '../../../src/Assets/letters/ucur.JPG';
import P from '../../../src/Assets/letters/P.JPG';
import Uu from '../../Assets/representacao/Uu.jpg';
import jmi from '../../../src/Assets/letters/jmi.jpg';
import qmi from '../../../src/Assets/letters/qmi.jpg';
import gmi from '../../../src/Assets/letters/gmi.JPG';
import W from '../../../src/Assets/letters/W.JPG';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 200px);
    grid-column-gap: 0.1em;
    grid-row-gap: 1.5em;
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

const AudioInstrucao = styled(Audio)`
    margin: 20px;
`;

const Representation = styled.div` 
    text-align: center;
`;

const ImgA = styled.img` 
    height: 80px;
`;

function ClickLetterU(){  
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
    
    function validaErro1(){
        setColor1('#F00');
        setErros(erros+1);
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
    function validaErro17(){
        setColor17('#F00');
        setErros(erros+1);
    }
    function validaAcerto18(){
        setColor18('#0F0');
        setAcertos(acertos+1);
    }
    function validaErro19(){
        setColor19('#F00');
        setErros(erros+1);
    }
    function validaAcerto20(){
        setColor20('#0F0');
        setAcertos(acertos+1);
    }

    function contacertos(){
        alert('Você acertou ' + acertos + '.');
    }

    function contaerros(){
        alert('Você errou ' + erros);
    }

    return(
        <Layout>
            <Container>
                <AudioInstrucao />

                <Representation>
                    <ImgA src={Uu} alt="U" />
                </Representation>  

                    <Wrapper>
                        <CardClick onClick={validaErro1} style={{borderColor: color1,}}>
                            <Img src={omi} alt="O" />  
                        </CardClick>
                        <CardClick onClick={validaErro2} style={{borderColor: color2,}}>
                            <Img src={ami} alt="A"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto3} style={{borderColor: color3,}}>
                            <Img src={o_cur} alt="O"/>
                        </CardClick>
                        <CardClick onClick={validaErro4} style={{borderColor: color4,}}>
                            <Img src={I} alt="I"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto5} style={{borderColor: color5,}}>
                            <Img src={U} alt="U"/>
                        </CardClick>
                        <CardClick onClick={validaErro6} style={{borderColor: color6,}}>
                            <Img src={A} alt="A"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto7} style={{borderColor: color7,}}>
                            <Img src={umi} alt="U"/>
                        </CardClick>
                        <CardClick onClick={validaErro8} style={{borderColor: color8,}}>
                            <Img src={Q} alt="Q"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto9} style={{borderColor: color9,}}>
                            <Img src={U} alt="U"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto10} style={{borderColor: color10,}}>
                            <Img src={umi} alt="U"/>
                        </CardClick>
                        <CardClick onClick={validaErro11} style={{borderColor: color11,}}>
                            <Img src={Z} alt="Z"/>
                        </CardClick>
                        <CardClick onClick={validaErro12} style={{borderColor: color12,}}>
                            <Img src={qmi} alt="Q"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto13} style={{borderColor: color13,}}>
                            <Img src={ucur} alt="U"/>
                        </CardClick>
                        <CardClick onClick={validaErro14} style={{borderColor: color14,}}>
                            <Img src={P} alt="P"/>
                        </CardClick>
                        <CardClick onClick={validaErro15} style={{borderColor: color15,}}>
                            <Img src={jmi} alt="J"/>
                        </CardClick>
                        <CardClick onClick={validaErro16} style={{borderColor: color16,}}>
                            <Img src={omi} alt="O"/>
                        </CardClick>
                        <CardClick onClick={validaErro17} style={{borderColor: color17,}}>
                            <Img src={gmi} alt="G"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto18} style={{borderColor: color18,}}>
                            <Img src={umi} alt="U"/>
                        </CardClick>
                        <CardClick onClick={validaErro19} style={{borderColor: color19,}}>
                            <Img src={W} alt="W"/>
                        </CardClick>
                        <CardClick onClick={validaAcerto20} style={{borderColor: color20,}}>
                            <Img src={u_cur} alt="U"/>
                        </CardClick>
                    </Wrapper>
            </Container>
            <Link to="/enterLetterU"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>

    
    );
}

export default ClickLetterU;