import React from 'react';
import {useState} from 'react'; 
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Audio from '../../components/Audio/Audio';
//import AudioEnter from '../../../public/audio/Audio_A/tela5-.mp3'

import Apito from '../../Assets/a/apito.png';
import Faca from '../../Assets/a/faca.png';
import Fumaca from '../../Assets/u/fumaca.png';
import Elefante from '../../Assets/e/elefante.png';
import Tucano from '../../Assets/u/tucano.png';
import Lua from '../../Assets/u/lua.png';
import Espada from '../../Assets/e/espada.png';
import Ioio from '../../Assets/i/ioio.png';
import Igreja from '../../Assets/i/igreja.png';
import Onibus from '../../Assets/o/onibus.png';
import Pirulito from '../../Assets/i/pirulito.png';
import Caneta from '../../Assets/e/caneta.png';

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

function TestVowels () {
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
    const [letter18, setLetter18] = useState('');    
    const [color18, setColor18] = useState('#000');    
    const [answer18, setAnswer18] = useState(false);
    const [letter19, setLetter19] = useState('');    
    const [color19, setColor19] = useState('#000');    
    const [answer19, setAnswer19] = useState(false);
    const [letter20, setLetter20] = useState('');    
    const [color20, setColor20] = useState('#000');    
    const [answer20, setAnswer20] = useState(false);
    const [letter21, setLetter21] = useState('');    
    const [color21, setColor21] = useState('#000');    
    const [answer21, setAnswer21] = useState(false);
    const [letter22, setLetter22] = useState('');    
    const [color22, setColor22] = useState('#000');    
    const [answer22, setAnswer22] = useState(false);
    const [letter23, setLetter23] = useState('');    
    const [color23, setColor23] = useState('#000');    
    const [answer23, setAnswer23] = useState(false);
    const [letter24, setLetter24] = useState('');    
    const [color24, setColor24] = useState('#000');    
    const [answer24, setAnswer24] = useState(false);
    const [letter25, setLetter25] = useState('');    
    const [color25, setColor25] = useState('#000');    
    const [answer25, setAnswer25] = useState(false);
    const [letter26, setLetter26] = useState('');    
    const [color26, setColor26] = useState('#000');    
    const [answer26, setAnswer26] = useState(false);
    const [letter27, setLetter27] = useState('');    
    const [color27, setColor27] = useState('#000');    
    const [answer27, setAnswer27] = useState(false);
    const [letter28, setLetter28] = useState('');    
    const [color28, setColor28] = useState('#000');    
    const [answer28, setAnswer28] = useState(false);
    const [letter29, setLetter29] = useState('');    
    const [color29, setColor29] = useState('#000');    
    const [answer29, setAnswer29] = useState(false);
    const [letter30, setLetter30] = useState('');    
    const [color30, setColor30] = useState('#000');    
    const [answer30, setAnswer30] = useState(false);
    const [letter31, setLetter31] = useState('');    
    const [color31, setColor31] = useState('#000');    
    const [answer31, setAnswer31] = useState(false);
    const [letter32, setLetter32] = useState('');    
    const [color32, setColor32] = useState('#000');    
    const [answer32, setAnswer32] = useState(false);
    const [letter33, setLetter33] = useState('');    
    const [color33, setColor33] = useState('#000');    
    const [answer33, setAnswer33] = useState(false);
    const [letter34, setLetter34] = useState('');    
    const [color34, setColor34] = useState('#000');    
    const [answer34, setAnswer34] = useState(false);
    const [letter35, setLetter35] = useState('');    
    const [color35, setColor35] = useState('#000');    
    const [answer35, setAnswer35] = useState(false);
    const [letter36, setLetter36] = useState('');    
    const [color36, setColor36] = useState('#000');    
    const [answer36, setAnswer36] = useState(false);
    const [letter37, setLetter37] = useState('');    
    const [color37, setColor37] = useState('#000');    
    const [answer37, setAnswer37] = useState(false);
            
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
        setColor18(() => answer18  ? '#0F0': '#F00');
        setColor19(() => answer19  ? '#0F0': '#F00');
        setColor20(() => answer20  ? '#0F0': '#F00');
        setColor21(() => answer21  ? '#0F0': '#F00');
        setColor22(() => answer22  ? '#0F0': '#F00');
        setColor23(() => answer23  ? '#0F0': '#F00');
        setColor24(() => answer24  ? '#0F0': '#F00');
        setColor25(() => answer25  ? '#0F0': '#F00');
        setColor26(() => answer26  ? '#0F0': '#F00');
        setColor27(() => answer27  ? '#0F0': '#F00');
        setColor28(() => answer28  ? '#0F0': '#F00');
        setColor29(() => answer29  ? '#0F0': '#F00');
        setColor30(() => answer30  ? '#0F0': '#F00');
        setColor31(() => answer31  ? '#0F0': '#F00');
        setColor32(() => answer32  ? '#0F0': '#F00');
        setColor33(() => answer33  ? '#0F0': '#F00');
        setColor34(() => answer34  ? '#0F0': '#F00');
        setColor35(() => answer35  ? '#0F0': '#F00');
        setColor36(() => answer36  ? '#0F0': '#F00');
        setColor37(() => answer37  ? '#0F0': '#F00');
    }, [answer1, answer2, answer3, answer4, answer5, 
        answer6, answer7, answer8, answer9, answer10,
        answer11, answer12, answer13, answer14, answer15,
        answer16, answer17, answer18, answer19, answer20,
        answer21, answer22, answer23, answer24, answer25,
        answer26, answer27, answer28, answer29, answer30,
        answer31, answer32, answer33, answer34, answer35, 
        answer36, answer37]);


    function validaLetter1({target}){
        setLetter1(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'A') {
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
        
        if(pressLetter === 'I') {
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
        
        if(pressLetter === 'A') {
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
        
        if(pressLetter === 'A') {
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
        
        if(pressLetter === 'U') {
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
        
        if(pressLetter === 'A') {
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
        
        if(pressLetter === 'A') {
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
        
        if(pressLetter === 'E') {
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
        
        if(pressLetter === 'E') {
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
        
        if(pressLetter === 'A') {
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
        
        if(pressLetter === 'E') {
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
        
        if(pressLetter === 'U') {
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
        
        if(pressLetter === 'A') {
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
        
        if(pressLetter === 'U') {
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
        
        if(pressLetter === 'A') {
            setAnswer17(true);
            setAcertos(acertos+1);
        } else {
            setAnswer17(false);
            setErros(erros+1);
        }
    }
    function validaLetter18({target}){
        setLetter18(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'E') {
            setAnswer18(true);
            setAcertos(acertos+1);
        } else {
            setAnswer18(false);
            setErros(erros+1);
        }
    }
    function validaLetter19({target}){
        setLetter19(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'A') {
            setAnswer19(true);
            setAcertos(acertos+1);
        } else {
            setAnswer19(false);
            setErros(erros+1);
        }
    }
    function validaLetter20({target}){
        setLetter20(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'A') {
            setAnswer20(true);
            setAcertos(acertos+1);
        } else {
            setAnswer20(false);
            setErros(erros+1);
        }
    }
    function validaLetter21({target}){
        setLetter21(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'I') {
            setAnswer21(true);
            setAcertos(acertos+1);
        } else {
            setAnswer21(false);
            setErros(erros+1);
        }
    }
    function validaLetter22({target}){
        setLetter22(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'O') {
            setAnswer22(true);
            setAcertos(acertos+1);
        } else {
            setAnswer22(false);
            setErros(erros+1);
        }
    }
    function validaLetter23({target}){
        setLetter23(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'I') {
            setAnswer23(true);
            setAcertos(acertos+1);
        } else {
            setAnswer23(false);
            setErros(erros+1);
        }
    }
    function validaLetter24({target}){
        setLetter24(target.value)
        const pressLetter = target.value.toUpperCase();
        if(pressLetter === 'O') {
            setAnswer24(true);
            setAcertos(acertos+1);
        } else {
            setAnswer24(false);
            setErros(erros+1);
        }
    }
    function validaLetter25({target}){
        setLetter25(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'I') {
            setAnswer25(true);
            setAcertos(acertos+1);
        } else {
            setAnswer25(false);
            setErros(erros+1);
        }
    }
    function validaLetter26({target}){
        setLetter26(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'E') {
            setAnswer26(true);
            setAcertos(acertos+1);
        } else {
            setAnswer26(false);
            setErros(erros+1);
        }
    }
    function validaLetter27({target}){
        setLetter27(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'A') {
            setAnswer27(true);
            setAcertos(acertos+1);
        } else {
            setAnswer27(false);
            setErros(erros+1);
        }
    }
    function validaLetter28({target}){
        setLetter28(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'O') {
            setAnswer28(true);
            setAcertos(acertos+1);
        } else {
            setAnswer28(false);
            setErros(erros+1);
        }
    }
    function validaLetter29({target}){
        setLetter29(target.value)
        const pressLetter = target.value.toUpperCase();
        if(pressLetter === 'I') {
            setAnswer29(true);
            setAcertos(acertos+1);
        } else {
            setAnswer29(false);
            setErros(erros+1);
        }
    }
    function validaLetter30({target}){
        setLetter30(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'U') {
            setAnswer30(true);
            setAcertos(acertos+1);
        } else {
            setAnswer30(false);
            setErros(erros+1);
        }
    }
    function validaLetter31({target}){
        setLetter31(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'I') {
            setAnswer31(true);
            setAcertos(acertos+1);
        } else {
            setAnswer31(false);
            setErros(erros+1);
        }
    }
    function validaLetter32({target}){
        setLetter32(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'U') {
            setAnswer32(true);
            setAcertos(acertos+1);
        } else {
            setAnswer32(false);
            setErros(erros+1);
        }
    }
    function validaLetter33({target}){
        setLetter33(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'I') {
            setAnswer33(true);
            setAcertos(acertos+1);
        } else {
            setAnswer33(false);
            setErros(erros+1);
        }
    }
    function validaLetter34({target}){
        setLetter34(target.value)
        const pressLetter = target.value.toUpperCase();
        if(pressLetter === 'O') {
            setAnswer34(true);
            setAcertos(acertos+1);
        } else {
            setAnswer34(false);
            setErros(erros+1);
        }
    }
    function validaLetter35({target}){
        setLetter35(target.value)
        const pressLetter = target.value.toUpperCase();
        if(pressLetter === 'A') {
            setAnswer35(true);
            setAcertos(acertos+1);
        } else {
            setAnswer35(false);
            setErros(erros+1);
        }
    }
    function validaLetter36({target}){
        setLetter36(target.value)
        const pressLetter = target.value.toUpperCase();
        if(pressLetter === 'E') {
            setAnswer36(true);
            setAcertos(acertos+1);
        } else {
            setAnswer36(false);
            setErros(erros+1);
        }
    }
    function validaLetter37({target}){
        setLetter37(target.value)
        const pressLetter = target.value.toUpperCase();
        if(pressLetter === 'A') {
            setAnswer37(true);
            setAcertos(acertos+1);
        } else {
            setAnswer37(false);
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
                <AudioInstrucao />
                    <Wrapper>
                        <CardGeral>                            
                            <div>
                                <img src={Apito}  alt="Apito" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter1} 
                                    onChange={validaLetter1} style={{outlineColor:color1,}}
                                />
                                P<input type="text" maxLength="1" size="1" placeholder="_" value={letter2} 
                                    onChange={validaLetter2} style={{outlineColor:color2,}}
                                />
                                T<input type="text" maxLength="1" size="1" placeholder="_" value={letter3} 
                                    onChange={validaLetter3} style={{outlineColor:color3,}}
                                />
                            </div>    
                        </CardGeral>
                        <CardGeral>                           
                            <div>
                                <img src={Faca}  alt="Faca" /><hr/>
                                F<input type="text" maxLength="1" size="1" placeholder="_" value={letter4}
                                    onChange={validaLetter4} style={{outlineColor:color4,}}
                                />
                                C<input type="text" maxLength="1" size="1" placeholder="_" value={letter5}
                                    onChange={validaLetter5} style={{outlineColor:color5,}}
                                />
                            </div>                                          
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Fumaca}  alt="Fumaca" /><hr/>
                                F<input type="text" maxLength="1" size="1" placeholder="_" value={letter6}
                                    onChange={validaLetter6} style={{outlineColor:color6,}}
                                />
                                M<input type="text" maxLength="1" size="1" placeholder="_" value={letter7}
                                    onChange={validaLetter7} style={{outlineColor:color7,}}
                                />
                                Ç<input type="text" maxLength="1" size="1" placeholder="_" value={letter8}
                                    onChange={validaLetter8} style={{outlineColor:color8,}}
                                />
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Elefante}  alt="Elefante" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter9}
                                    onChange={validaLetter9} style={{outlineColor:color9,}}
                                />
                                L<input type="text" maxLength="1" size="1" placeholder="_" value={letter10}
                                    onChange={validaLetter10} style={{outlineColor:color10,}}
                                />
                                F<input type="text" maxLength="1" size="1" placeholder="_" value={letter11}
                                    onChange={validaLetter11} style={{outlineColor:color11,}}
                                />
                                NT<input type="text" maxLength="1" size="1" placeholder="_" value={letter12}
                                    onChange={validaLetter12} style={{outlineColor:color12,}}
                                />
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Tucano}  alt="Tucano" /><hr/>
                                T<input type="text" maxLength="1" size="1" placeholder="_" value={letter13}
                                    onChange={validaLetter13} style={{outlineColor:color13,}}
                                />
                                C<input type="text" maxLength="1" size="1" placeholder="_" value={letter14}
                                    onChange={validaLetter14} style={{outlineColor:color14,}}
                                />
                                N<input type="text" maxLength="1" size="1" placeholder="_" value={letter15}
                                    onChange={validaLetter15} style={{outlineColor:color15,}}
                                />                                
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Lua}  alt="Lua" /><hr/>
                                L<input type="text" maxLength="1" size="1" placeholder="_" value={letter16}
                                    onChange={validaLetter16} style={{outlineColor:color16,}}
                                />
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter17}
                                    onChange={validaLetter17} style={{outlineColor:color17,}}
                                />
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Espada}  alt="Espada" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter18}
                                    onChange={validaLetter18} style={{outlineColor:color18,}}
                                />
                                SP<input type="text" maxLength="1" size="1" placeholder="_" value={letter19}
                                    onChange={validaLetter19} style={{outlineColor:color19,}}
                                />
                                D<input type="text" maxLength="1" size="1" placeholder="_" value={letter20}
                                    onChange={validaLetter20} style={{outlineColor:color20,}}
                                />                                
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Ioio}  alt="Ioio" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter21}
                                    onChange={validaLetter21} style={{outlineColor:color21,}}
                                />
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter22}
                                    onChange={validaLetter22} style={{outlineColor:color22,}}
                                />
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter23}
                                    onChange={validaLetter23} style={{outlineColor:color23,}}
                                />
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter24}
                                    onChange={validaLetter24} style={{outlineColor:color24,}}
                                />
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Igreja}  alt="Igreja" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter25}
                                    onChange={validaLetter25} style={{outlineColor:color25,}}
                                />
                                GR<input type="text" maxLength="1" size="1" placeholder="_" value={letter26}
                                    onChange={validaLetter26} style={{outlineColor:color26,}}
                                />
                                J<input type="text" maxLength="1" size="1" placeholder="_" value={letter27}
                                    onChange={validaLetter27} style={{outlineColor:color27,}}
                                />                                
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Onibus}  alt="Onibus" /><hr/>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter28}
                                    onChange={validaLetter28} style={{outlineColor:color28,}}
                                />
                                N<input type="text" maxLength="1" size="1" placeholder="_" value={letter29}
                                    onChange={validaLetter29} style={{outlineColor:color29,}}
                                />
                                B<input type="text" maxLength="1" size="1" placeholder="_" value={letter30}
                                    onChange={validaLetter30} style={{outlineColor:color30,}}
                                />S
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Pirulito}  alt="Pirulito" /><hr/>
                                P<input type="text" maxLength="1" size="1" placeholder="_" value={letter31}
                                    onChange={validaLetter31} style={{outlineColor:color31,}}
                                />
                                R<input type="text" maxLength="1" size="1" placeholder="_" value={letter32}
                                    onChange={validaLetter32} style={{outlineColor:color32,}}
                                />
                                L<input type="text" maxLength="1" size="1" placeholder="_" value={letter33}
                                    onChange={validaLetter33} style={{outlineColor:color33,}}
                                />
                                T<input type="text" maxLength="1" size="1" placeholder="_" value={letter34}
                                    onChange={validaLetter34} style={{outlineColor:color34,}}
                                />
                            </div>
                        </CardGeral>
                        <CardGeral>
                            <div>
                                <img src={Caneta}  alt="Caneta" /><hr/>
                                C<input type="text" maxLength="1" size="1" placeholder="_" value={letter35}
                                    onChange={validaLetter35} style={{outlineColor:color35,}}
                                />
                                N<input type="text" maxLength="1" size="1" placeholder="_" value={letter36}
                                    onChange={validaLetter36} style={{outlineColor:color36,}}
                                />
                                T<input type="text" maxLength="1" size="1" placeholder="_" value={letter37}
                                    onChange={validaLetter37} style={{outlineColor:color37,}}
                                />                                
                            </div>
                        </CardGeral>                                   
                    </Wrapper>
                <Link to=""><Button onClick={contAcertos}>Continuar</Button></Link>
            </Container>
        </Layout>
    );
}

export default TestVowels