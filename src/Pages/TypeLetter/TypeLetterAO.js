import React from 'react';
import {useState} from 'react'; 
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

import ReactAudioPlayer from 'react-audio-player';

import Mamao from '../../Assets/ao/mamao.png';
import Violao from '../../Assets/u/violao.png';
import Limao from '../../Assets/ao/limao.png';
import Tubarao from '../../Assets/u/tubarao.png';
import Vulcao from '../../Assets/u/vulcao.png';
import Coracao from '../../Assets/ao/coracao.png';
import Piao from '../../Assets/ao/piao.png';
import Leao from '../../Assets/ao/leao.png';
import Furacao from '../../Assets/ao/furacao.png';
import Caminhao from '../../Assets/ao/caminhao.png';
import Aviao from '../../Assets/a/aviao.png';
import RepresentationAO from '../../Assets/ao/representationAO.gif';

const Wrapper = styled.div`   
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 0.5em;
    font-size: 1.2em;

    img{ 
        width: 90px;
        height: 80px; 
        object-fit: contain;
    }
     
    input{
        width: 31px;
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
`; 

const AudioInstrucao = styled(ReactAudioPlayer)`
    margin: 20px; 
`;
const Representation = styled.div` 
    text-align: center;
`;
const ImgA = styled.img` 
    height: 60px;
    margin:0px;
`;

const CardGeral = styled(Card)`
    width: 200px;
    height:140px;
`;

function TypeLetterAO () {
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
    }, [answer1, answer2, answer3, answer4, answer5, 
        answer6, answer7, answer8, answer9, answer10,
        answer11, answer12]);

    function validaLetter1({target}){
        setLetter1(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'ÃO') {
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
        
        if(pressLetter === 'ÃO') {
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
        
        if(pressLetter === 'ÃO') {
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
        
        if(pressLetter === 'ÃO') {
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
        
        if(pressLetter === 'ÃO') {
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
        
        if(pressLetter === 'ÃO') {
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
        
        if(pressLetter === 'ÃO') {
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
        
        if(pressLetter === 'ÃO') {
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
        
        if(pressLetter === 'ÃO') {
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
        
        if(pressLetter === 'ÃO') {
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
        
        if(pressLetter === 'ÃO') {
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
        
        if(pressLetter === 'ÃO') {
            setAnswer12(true);
            setAcertos(acertos+1);
        } else {
            setAnswer12(false);
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
                <AudioInstrucao controls />
                <Representation>
                    <ImgA src={RepresentationAO} alt="AO" />
                </Representation>  
                    <Wrapper>
                        <CardGeral>                            
                            <div>
                                <img src={Mamao}  alt="Mamao" /><hr/>
                                MAM<input type="text" maxLength="2" size="1" placeholder="__" value={letter1} 
                                    onChange={validaLetter1} style={{outlineColor:color1,}}
                                />
                            </div>    
                        </CardGeral>
                        <CardGeral>                           
                            <div>
                                <img src={Piao}  alt="Piao" /><hr/>
                                PI<input type="text" maxLength="2" size="1" placeholder="__" value={letter2}
                                    onChange={validaLetter2} style={{outlineColor:color2,}}
                                />
                            </div>                                          
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Coracao}  alt="Coracao" /><hr/>
                                CORAÇ<input type="text" maxLength="2" size="1" placeholder="__" value={letter3}
                                    onChange={validaLetter3} style={{outlineColor:color3,}}
                                />
                            </div>
                        </CardGeral>  
                        <CardGeral>
                            <div>
                                <img src={Limao}  alt="Limao" /><hr/>
                                LIM<input type="text" maxLength="2" size="1" placeholder="__" value={letter4}
                                    onChange={validaLetter4} style={{outlineColor:color4,}}
                                />
                            </div>
                        </CardGeral>    
                        <CardGeral>
                            <div>
                                <img src={Violao}  alt="Violao" /><hr/>
                                VIOL<input type="text" maxLength="2" size="1" placeholder="__" value={letter5}
                                    onChange={validaLetter5} style={{outlineColor:color5,}}
                                />
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Vulcao}  alt="Vulcao" /><hr/>
                                VULC<input type="text" maxLength="2" size="1" placeholder="__" value={letter6}
                                    onChange={validaLetter6} style={{outlineColor:color6,}}
                                />
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Tubarao}  alt="Tubarao" /><hr/>
                                TUBAR<input type="text" maxLength="2" size="1" placeholder="__" value={letter7}
                                    onChange={validaLetter7} style={{outlineColor:color7,}}
                                />
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Leao}  alt="Leao" /><hr/>
                                LE<input type="text" maxLength="2" size="1" placeholder="__" value={letter8}
                                    onChange={validaLetter8} style={{outlineColor:color8,}}
                                />
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Furacao}  alt="Furacao" /><hr/>
                                FURAC<input type="text" maxLength="2" size="1" placeholder="__" value={letter9}
                                    onChange={validaLetter9} style={{outlineColor:color9,}}
                                />
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Caminhao}  alt="Caminhao" /><hr/>
                                CAMINH<input type="text" maxLength="2" size="1" placeholder="__" value={letter10}
                                    onChange={validaLetter10} style={{outlineColor:color10,}}
                                />
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Aviao}  alt="Aviao" /><hr/>
                                AVI<input type="text" maxLength="2" size="1" placeholder="__" value={letter11}
                                    onChange={validaLetter11} style={{outlineColor:color11,}}
                                />
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Mamao}  alt="Mamao" /><hr/>
                                MAM<input type="text" maxLength="2" size="1" placeholder="__" value={letter12}
                                    onChange={validaLetter12} style={{outlineColor:color12,}}
                                />
                            </div>
                        </CardGeral>
                                         
                    </Wrapper>
                <Link to="/consonants"><Button onClick={contAcertos}>Continuar</Button></Link>
            </Container>
        </Layout>
    );
}

export default TypeLetterAO