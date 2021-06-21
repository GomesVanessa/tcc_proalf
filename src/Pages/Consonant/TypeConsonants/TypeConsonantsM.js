import React from 'react';
import {useState} from 'react'; 
import styled from "styled-components";
import Layout from '../../../components/Layout/Layout';
import Card from '../../../components/Card/Card';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

import ReactAudioPlayer from 'react-audio-player';
import telaReadM from '../../../Audios/M/telaTypeM.mp3';
import representacaoM from '../../../Assets/consonants/M/Mimg/representacaoM.jpg';

import Mala from '../../../Assets/consonants/M/Mimg/mala.png';
import Macaco from '../../../Assets/i/macaco.png';
import Morango from '../../../Assets/consonants/M/Mimg/morango.png';
import Melancia from '../../../Assets/consonants/M/Mimg/melancia.png';
import Mamao from '../../../Assets/ao/mamao.png';
import Magico from '../../../Assets/consonants/M/Mimg/magico.png';
import Mangueira from '../../../Assets/consonants/M/Mimg/mangueira.png';
import Martelo from '../../../Assets/consonants/martelo.png';
import Moto from '../../../Assets/consonants/M/Mimg/moto.png';
import Meia from '../../../Assets/consonants/M/Mimg/meia.png';
import Medico from '../../../Assets/consonants/M/Mimg/medico.png';
import Milho from '../../../Assets/consonants/M/Mimg/milho.png';

const Wrapper = styled.div`   
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 6px;
    grid-row-gap: 0.6em;
    font-size: 1.3em;

    img{ 
        width: 90px;
        height: 80px; 
        object-fit: contain;
    }
     
    input{
        width: 33px;
        height: 28px;
        align-items: center;
        border: none;
        text-transform: uppercase;
        font-size: 1em;
    } 
    hr{
        width: 100%;
        //width: 300px;
        border: 0; 
        height: 1.5px; 
        background-image: linear-gradient(to right, #f0f0f0, #F2F3F4, #F2F3F4, #f0f0f0);
    }
    .papaya{
        width: 50px;
    }
`; 

const AudioInstrucao = styled(ReactAudioPlayer)`
    margin: 20px; 
`;
const Representation = styled.div` 
    text-align: center;
`;
const ImgA = styled.img` 
    height: 50px;
    margin:0px;
`;

const CardGeral = styled(Card)`
    width: 200px;
    height:140px;
`;

function TypeConsonantsM () {
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0);
    const [letter1, setLetter1] = useState('');
    const [color1, setColor1] = useState('#000');
    const [answer1, setAnswer1] = useState(false);
    const [letter2, setLetter2] = useState('');    
    const [color2, setColor2] = useState('#000');    
    const [answer2, setAnswer2] = useState(false);
    const [letter3, setLetter3] = useState('');    
    const [color3, setColor3] = useState('#000');    
    const [answer3, setAnswer3] = useState(false);
    const [letter4, setLetter4] = useState('');    
    const [color4, setColor4] = useState('#000');    
    const [answer4, setAnswer4] = useState(false);
    const [letter5, setLetter5] = useState('');    
    const [color5, setColor5] = useState('#000');    
    const [answer5, setAnswer5] = useState(false);
    const [letter6, setLetter6] = useState('');    
    const [color6, setColor6] = useState('#000');    
    const [answer6, setAnswer6] = useState(false);
    const [letter7, setLetter7] = useState('');    
    const [color7, setColor7] = useState('#000');    
    const [answer7, setAnswer7] = useState(false);
    const [letter8, setLetter8] = useState('');    
    const [color8, setColor8] = useState('#000');    
    const [answer8, setAnswer8] = useState(false);
    const [letter9, setLetter9] = useState('');    
    const [color9, setColor9] = useState('#000');    
    const [answer9, setAnswer9] = useState(false);
    const [letter10, setLetter10] = useState('');    
    const [color10, setColor10] = useState('#000');    
    const [answer10, setAnswer10] = useState(false);
    const [letter11, setLetter11] = useState('');    
    const [color11, setColor11] = useState('#000');    
    const [answer11, setAnswer11] = useState(false);
    const [letter12, setLetter12] = useState('');    
    const [color12, setColor12] = useState('#000');    
    const [answer12, setAnswer12] = useState(false);
    const [letter13, setLetter13] = useState('');    
    const [color13, setColor13] = useState('#000');    
    const [answer13, setAnswer13] = useState(false);
       
    React.useEffect(() => {
        setColor1(() => answer1  ? '#0F0': '#F00');
        setColor2(() => answer2  ? '#0F0': '#F00');
        setColor3(() => answer3  ? '#0F0': '#F00');
        setColor4(() => answer4  ? '#0F0': '#F00');
        setColor5(() => answer5  ? '#0F0': '#F00');
        setColor6(() => answer6  ? '#0F0': '#F00');
        setColor7(() => answer7  ? '#0F0': '#F00');
        setColor8(() => answer8  ? '#0F0': '#F00');
        setColor9(() => answer9  ? '#0F0': '#F00');
        setColor10(() => answer10  ? '#0F0': '#F00');
        setColor11(() => answer11  ? '#0F0': '#F00');
        setColor12(() => answer12  ? '#0F0': '#F00');
        setColor13(() => answer13  ? '#0F0': '#F00');
    }, [answer1, answer2, answer3, answer4, answer5, 
        answer6, answer7, answer8, answer9, answer10,
        answer11, answer12, answer13]);

    function validaLetter1({target}){
        setLetter1(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'MA') {
            setAnswer1(true);
            setAcertos(acertos+1);
            
        } else {
            setAnswer1(false);
            setErros(erros+1);
        }
    }
    function validaLetter2({target}){
        setLetter2(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'MA') {
            setAnswer2(true);
            setAcertos(acertos+1);
       
        } else {
            setAnswer2(false);
            setErros(erros+1);
        }
    }
    function validaLetter3({target}){
        setLetter3(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'MO') {
            setAnswer3(true);
            setAcertos(acertos+1);
        } else {
            setAnswer3(false);
            setErros(erros+1);
        }
    }
    function validaLetter4({target}){
        setLetter4(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'ME') {
            setAnswer4(true);
            setAcertos(acertos+1);
        } else {
            setAnswer4(false);
            setErros(erros+1);
        }
    }
    function validaLetter5({target}){
        setLetter5(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'MA') {
            setAnswer5(true);
            setAcertos(acertos+1);
        } else {
            setAnswer5(false);
            setErros(erros+1);
        }
    }
    function validaLetter6({target}){
        setLetter6(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'MÃO') {
            setAnswer6(true);
            setAcertos(acertos+1);
        } else {
            setAnswer6(false);
            setErros(erros+1);
        }
    }
    function validaLetter7({target}){
        setLetter7(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'MÁ') {
            setAnswer7(true);
            setAcertos(acertos+1);
        } else {
            setAnswer7(false);
            setErros(erros+1);
        }
    }
    function validaLetter8({target}){
        setLetter8(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'MA') {
            setAnswer8(true);
            setAcertos(acertos+1);
        } else {
            setAnswer8(false);
            setErros(erros+1);
        }
    }
    function validaLetter9({target}){
        setLetter9(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'MA') {
            setAnswer9(true);
            setAcertos(acertos+1);
        } else {
            setAnswer9(false);
            setErros(erros+1);
        }
    }
    function validaLetter10({target}){
        setLetter10(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'MO') {
            setAnswer10(true);
            setAcertos(acertos+1);
        } else {
            setAnswer10(false);
            setErros(erros+1);
        }
    }
    function validaLetter11({target}){
        setLetter11(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'ME') {
            setAnswer11(true);
            setAcertos(acertos+1);
        } else {
            setAnswer11(false);
            setErros(erros+1);
        }
    }
    function validaLetter12({target}){
        setLetter12(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'MÉ') {
            setAnswer12(true);
            setAcertos(acertos+1);
        } else {
            setAnswer12(false);
            setErros(erros+1);
        }
    }
    function validaLetter13({target}){
        setLetter13(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'MI') {
            setAnswer13(true);
            setAcertos(acertos+1);
        } else {
            setAnswer13(false);
            setErros(erros+1);
        }
    }
    

    function contAcertos(){
        console.log('Você acertou ' + acertos);
    }

    function contErros(){
        alert('Você errou ' + erros);
    }

    return (
        <Layout>
            <Container> 
                <AudioInstrucao src={telaReadM} controls />
                <Representation>
                    <ImgA src={representacaoM} alt="M" />
                </Representation>  
                    <Wrapper>
                        <CardGeral>                            
                            <div>
                                <img src={Mala}  alt="Mala" /><hr/>
                                <input type="text" maxLength="2" size="1" placeholder="_ _" value={letter1} 
                                    onChange={validaLetter1} style={{outlineColor:color1,}}
                                />LA
                            </div>    
                        </CardGeral>
                        <CardGeral>                           
                            <div>
                                <img src={Macaco}  alt="Macaco" /><hr/>
                                <input type="text" maxLength="2" size="1" placeholder="_ _" value={letter2}
                                    onChange={validaLetter2} style={{outlineColor:color2,}}
                                />CACO
                            </div>                                          
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Morango}  alt="Morango" /><hr/>
                                <input type="text" maxLength="2" size="1" placeholder="_ _" value={letter3}
                                    onChange={validaLetter3} style={{outlineColor:color3,}}
                                />RANGO
                            </div>
                        </CardGeral>  
                        <CardGeral>
                            <div>
                                <img src={Melancia}  alt="Melancia" /><hr/>
                                <input type="text" maxLength="2" size="1" placeholder="_ _" value={letter4}
                                    onChange={validaLetter4} style={{outlineColor:color4,}}
                                />LANCIA
                            </div>
                        </CardGeral>    
                        <CardGeral>
                            <div>
                                <img src={Mamao}  alt="Mamao" /><hr/>
                                <input type="text" maxLength="2" size="1" placeholder="_ _" value={letter5}
                                    onChange={validaLetter5} style={{outlineColor:color5,}}
                                />
                                <input className="papaya" type="text" maxLength="3" size="1" placeholder="_ _ _" value={letter6}
                                    onChange={validaLetter6} style={{outlineColor:color6,}}
                                />                                
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Magico}  alt="Magico" /><hr/>
                                <input type="text" maxLength="2" size="1" placeholder="_ _" value={letter7}
                                    onChange={validaLetter7} style={{outlineColor:color7,}}
                                />GICO
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Mangueira}  alt="Mangueira" /><hr/>
                                <input type="text" maxLength="2" size="1" placeholder="_ _" value={letter8}
                                    onChange={validaLetter8} style={{outlineColor:color8,}}
                                />NGUEIRA
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img className = "bean" src={Martelo}  alt="Martelo" /><hr/>
                                <input type="text" maxLength="2" size="1" placeholder="_ _" value={letter9}
                                    onChange={validaLetter9} style={{outlineColor:color9,}}
                                />RTELO
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Moto}  alt="Moto" /><hr/>
                                <input type="text" maxLength="2" size="1" placeholder="_ _" value={letter10}
                                    onChange={validaLetter10} style={{outlineColor:color10,}}
                                />TO
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Meia}  alt="Meia" /><hr/>
                                <input type="text" maxLength="2" size="1" placeholder="_ _" value={letter11}
                                    onChange={validaLetter11} style={{outlineColor:color11,}}
                                />IA
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Medico}  alt="Medico" /><hr/>
                                <input type="text" maxLength="2" size="1" placeholder="_ _" value={letter12}
                                    onChange={validaLetter12} style={{outlineColor:color12,}}
                                />DICO
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Milho}  alt="Milho" /><hr/>
                                <input type="text" maxLength="2" size="1" placeholder="_ _" value={letter13}
                                    onChange={validaLetter13} style={{outlineColor:color13,}}
                                />LHO
                            </div>
                        </CardGeral>
                                         
                    </Wrapper>
                <Link to="/readM"><Button onClick={contAcertos}>Continuar</Button></Link>
            </Container>
        </Layout>
    );
}

export default TypeConsonantsM