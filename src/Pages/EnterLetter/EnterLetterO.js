import React from 'react';
import {useState} from 'react'; 
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';

import Audio from '../../components/Audio/Audio';
//import AudioEnter from '../../../public/audio/Audio_A/tela5-.mp3'

import Osso from '../../Assets/o/osso.png';
import Ovo from '../../Assets/o/ovo.png';
import Olho from '../../Assets/o/olho.png';
import Ioio from '../../Assets/o/ioio.png';
import Onca from '../../Assets/o/onca.png';
import Onibus from '../../Assets/o/onibus.png';
import Orelha from '../../Assets/o/orelha.png';
import Ovelha from '../../Assets/o/ovelha.png';
import Radio from '../../Assets/o/radio.png';
import Navio from '../../Assets/o/navio.png';
import Porco from '../../Assets/o/porco.png';
import Piano from '../../Assets/o/piano.png';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
   
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 19px;
    grid-row-gap: 1.7em;
    font-size: 1.3em;

    img{ 
        width: 90px;
        height: 80px; 
        object-fit: contain;
    }
     
    input{
        width: 16px;
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

const AudioInstrucao = styled(Audio)`
    margin: 20px; 
`;

const CardGeral = styled(Card)`
    width: 200px;
    height:140px;
    
`;

function EnterLetterO () {
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
    const [letter14, setLetter14] = useState('');    
    const [color14, setColor14] = useState('#000');    
    const [answer14, setAnswer14] = useState(false);
    const [letter15, setLetter15] = useState('');    
    const [color15, setColor15] = useState('#000');    
    const [answer15, setAnswer15] = useState(false);
    const [letter16, setLetter16] = useState('');    
    const [color16, setColor16] = useState('#000');    
    const [answer16, setAnswer16] = useState(false);
    const [letter17, setLetter17] = useState('');    
    const [color17, setColor17] = useState('#000');    
    const [answer17, setAnswer17] = useState(false);
       
         
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
        setColor14(() => answer14  ? '#0F0': '#F00');
        setColor15(() => answer15  ? '#0F0': '#F00');
        setColor16(() => answer16  ? '#0F0': '#F00');
        setColor17(() => answer17  ? '#0F0': '#F00');
        }, [answer1, answer2, answer3, answer4, answer5, 
        answer6, answer7, answer8, answer9, answer10,
        answer11, answer12, answer13, answer14, answer15,answer16,answer17]);


    function validaLetter1({target}){
        setLetter1(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'O') {
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
        
        if(pressLetter === 'O') {
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
        
        if(pressLetter === 'O') {
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
        
        if(pressLetter === 'O') {
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
        
        if(pressLetter === 'O') {
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
        
        if(pressLetter === 'O') {
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
        
        if(pressLetter === 'O') {
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
        
        if(pressLetter === 'O') {
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
        
        if(pressLetter === 'O') {
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
        
        if(pressLetter === 'O') {
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
        
        if(pressLetter === 'O') {
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
        
        if(pressLetter === 'O') {
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
        
        if(pressLetter === 'O') {
            setAnswer13(true);
            setAcertos(acertos+1);
        } else {
            setAnswer13(false);
            setErros(erros+1);
        }
    }
    function validaLetter14({target}){
        setLetter14(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'O') {
            setAnswer14(true);
            setAcertos(acertos+1);
        } else {
            setAnswer14(false);
            setErros(erros+1);
        }
    }
    function validaLetter15({target}){
        setLetter15(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'O') {
            setAnswer15(true);
            setAcertos(acertos+1);
        } else {
            setAnswer15(false);
            setErros(erros+1);
        }
    }
    function validaLetter16({target}){
        setLetter16(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'O') {
            setAnswer16(true);
            setAcertos(acertos+1);
        } else {
            setAnswer16(false);
            setErros(erros+1);
        }
    }
    function validaLetter17({target}){
        setLetter17(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'O') {
            setAnswer17(true);
            setAcertos(acertos+1);
        } else {
            setAnswer17(false);
            setErros(erros+1);
        }
    }

    function contAcertos (){ 
        alert('Você acertou ' + acertos); 
    }

    function contErros (){
        alert('Você errou ' + erros);
    }
  
    return (
        <Layout>
            <Container> 
                <AudioInstrucao />
                    <Wrapper>
                        <CardGeral>                            
                            <div>
                                <img src={Osso}  alt="Osso" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter1} 
                                    onChange={validaLetter1} style={{outlineColor:color1,}}
                                />SS
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter2} 
                                    onChange={validaLetter2} style={{outlineColor:color2,}}
                                />
                            </div>    
                        </CardGeral>
                        <CardGeral>                            
                            <div>
                                <img src={Ovo}  alt="Ovo" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter3} 
                                    onChange={validaLetter3} style={{outlineColor:color3,}}
                                />V
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter4} 
                                    onChange={validaLetter4} style={{outlineColor:color4,}}
                                />
                            </div>    
                        </CardGeral>
                        <CardGeral>                            
                            <div>
                                <img src={Olho}  alt="Olho" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter5} 
                                    onChange={validaLetter5} style={{outlineColor:color5,}}
                                />LH
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter6} 
                                    onChange={validaLetter6} style={{outlineColor:color6,}}
                                />
                            </div>    
                        </CardGeral>
                        <CardGeral>                            
                            <div>
                                <img src={Ioio}  alt="Ioio" /><hr/>
                                I<input type="text" maxLength="1" size="1" placeholder="_" value={letter7} 
                                    onChange={validaLetter7} style={{outlineColor:color7,}}
                                />I
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter8} 
                                    onChange={validaLetter8} style={{outlineColor:color8,}}
                                />
                            </div>    
                        </CardGeral>
                        <CardGeral>                            
                            <div>
                                <img src={Onca}  alt="Onca" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter9} 
                                    onChange={validaLetter9} style={{outlineColor:color9,}}
                                />NÇA
                            </div>    
                        </CardGeral>
                        <CardGeral>                            
                            <div>
                                <img src={Onibus}  alt="Onibus" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter10} 
                                    onChange={validaLetter10} style={{outlineColor:color10,}}
                                />NIBUS
                            </div>    
                        </CardGeral>
                        <CardGeral>                            
                            <div>
                                <img src={Orelha}  alt="Orelha" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter11} 
                                    onChange={validaLetter11} style={{outlineColor:color11,}}
                                />RELHA
                            </div>    
                        </CardGeral>
                        <CardGeral>                            
                            <div>
                                <img src={Ovelha}  alt="Ovelha" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter12} 
                                    onChange={validaLetter12} style={{outlineColor:color12,}}
                                />VELHA
                            </div>    
                        </CardGeral>
                        <CardGeral>                            
                            <div>
                                <img src={Radio}  alt="Radio" /><hr/>
                                RADI<input type="text" maxLength="1" size="1" placeholder="_" value={letter13} 
                                    onChange={validaLetter13} style={{outlineColor:color13,}}
                                />
                            </div>    
                        </CardGeral>
                        <CardGeral>                            
                            <div>
                                <img src={Navio}  alt="Navio" /><hr/>
                                NAVI<input type="text" maxLength="1" size="1" placeholder="_" value={letter14} 
                                    onChange={validaLetter14} style={{outlineColor:color14,}}
                                />
                            </div>    
                        </CardGeral>
                        <CardGeral>                            
                            <div>
                                <img src={Porco}  alt="Porco" /><hr/>
                                P<input type="text" maxLength="1" size="1" placeholder="_" value={letter15} 
                                    onChange={validaLetter15} style={{outlineColor:color15,}}
                                />RC
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter16} 
                                    onChange={validaLetter16} style={{outlineColor:color16,}}
                                />
                            </div>    
                        </CardGeral>
                        <CardGeral>                            
                            <div>
                                <img src={Piano}  alt="Piano" /><hr/>
                                PIAN<input type="text" maxLength="1" size="1" placeholder="_" value={letter17} 
                                    onChange={validaLetter17} style={{outlineColor:color17,}}
                                />
                            </div>    
                        </CardGeral>                        
                    </Wrapper>
                <Link to="/letra/u/1"><Button onClick={contAcertos}>Continuar</Button></Link>
            </Container>
        </Layout>
    );
}

export default EnterLetterO