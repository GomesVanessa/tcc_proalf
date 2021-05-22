import React from 'react';
import {useState} from 'react'; 
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';

import Audio from '../../components/Audio/Audio';
//import AudioEnter from '../../../public/audio/Audio_A/tela5-.mp3'

import Apito from '../../Assets/a/apito.png';
import Faca from '../../Assets/a/faca.png';
import Anel from '../../Assets/a/anel.png';
import Aviao from '../../Assets/a/aviao.png';
import Abacaxi from '../../Assets/a/abacaxi.png';
import Aranha from '../../Assets/a/aranha.png';
import Agulha from '../../Assets/a/agulha.png';
import Asas from '../../Assets/a/asas.png';
import Batata from '../../Assets/a/batata.jpg';
import Caneca from '../../Assets/a/caneca.jpg';
import Caneta from '../../Assets/a/caneta.png';
import Gato from '../../Assets/a/gato.jpg';

const Wrapper = styled.div`
   
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 22px;
    grid-row-gap: 1.7em;

    img{ 
        width: 80px;
        height: 80px; 
        object-fit: contain;
    }
     
    input, label{
        width: 16px;
        height: 28px;
        align-items: center;
        border: none;
        text-transform: uppercase;
        font-size: 1.5em;
    } 
  
    hr{
        width: 100%;
        width: 300px;
        border: 0; 
        height: 1.5px; 
        background-image: linear-gradient(to right, #f0f0f0, #F2F3F4, #F2F3F4, #f0f0f0);
    }
`; 

const AudioInstrucao = styled(Audio)`
    margin: 20px; 
`;

// const EnterLetter = () => {

function EnterLetter(){

    const [letter, setLetter] = useState('');
    const [color, setColor] = useState('#000');
    const [answer, setAnswer] = useState(false);

    React.useEffect(() => {
        setColor(() => answer  ? '#0F0': '#F00');
    }, [answer]);


    function validaLetter({target}){
        setLetter(target.value)
        const pressLetter = target.value.toUpperCase();
        
        if(pressLetter === 'A') {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    }

    return (
        <Layout>
            <Container> 
                <AudioInstrucao />
                    <Wrapper>
                        <Card>
                            <img src={Apito}  alt="Apito" /><hr/>
                            <div>
                                <input type="text" maxLength="1" size="1" placeholder="_" value={letter} 
                                       onChange={validaLetter} style={{outlineColor:color,}}/>
                                PITO
                            </div>    
                        </Card>
                        <Card>
                            <img src={Faca}  alt="Faca" /><hr/>
                            <div>
                                F<input type="text" maxLength="1" size="1" placeholder="_" value={letter}
                                       onChange={validaLetter} style={{outlineColor:color,}}/>
                                C<input type="text" maxLength="1" size="1" placeholder="_" value={letter}
                                       onChange={validaLetter} style={{outlineColor:color,}}/>
                            </div>
                                            
                        </Card>
                        <Card>
                            <img src={Anel}  alt="Anel" /><hr/>
                            <input type="text" maxLength="1" placeholder="_" required/><label>NEL</label>
                        </Card>
                        <Card>
                            <img src={Aviao}  alt="Aviao" /><hr/>
                            <input type="text" maxLength="1" placeholder="_" required/><label>VI</label><input type="text" maxLength="1" placeholder="_"/><label>O</label>
                        </Card>

                        <Card>
                            <img src={Abacaxi}  alt="Abacaxi" /><hr/>
                            <input type="text" maxLength="1" placeholder="_" required/><label>B</label><input type="text" maxLength="1" placeholder="_"/><label>C</label><input type="text" maxLength="1" placeholder="_"/><label>XI</label>
                        </Card>
                        <Card>
                            <img src={Aranha}  alt="Aranha" /><hr/>
                            <input type="text" maxLength="1" placeholder="_" required/><label>R</label><input type="text" maxLength="1" placeholder="_"/><label>NH</label><input type="text" maxLength="1" placeholder="_"/>
                        </Card>
                        <Card>
                            <img src={Agulha}  alt="Agulha" /><hr/>
                            <input type="text" maxLength="1" placeholder="_" required/><label>GULH</label><input type="text" maxLength="1" placeholder="_"/>
                        </Card>
                        <Card>
                            <img src={Asas}  alt="Asas" /><hr/>
                            <input type="text" maxLength="1" placeholder="_" required/><label>S</label><input type="text" maxLength="1" placeholder="_"/><label>S</label>
                        </Card>

                        <Card>
                            <img src={Batata}  alt="Batata" /><hr/>
                            <label>B</label><input type="text" maxLength="1" placeholder="_" required/><label>T</label><input type="text" maxLength="1" placeholder="_"/><label>T</label><input type="text" maxLength="1" placeholder="_"/>
                        </Card>
                        <Card>
                            <img src={Caneca}  alt="Caneca" /><hr/>
                            <label>C</label><input type="text" maxLength="1" placeholder="_" required/><label>NEC</label><input type="text" maxLength="1" placeholder="_"/>
                        </Card>
                        <Card>
                            <img src={Caneta}  alt="Caneta" /><hr/>
                            <label>C</label><input type="text" maxLength="1" placeholder="_" required /><label>NET</label><input type="text" maxLength="1" placeholder="_"/>
                        </Card>
                        <Card>
                            <img src={Gato}  alt="Gato" /><hr/>
                            <label>G</label><input type="text" maxLength="1" placeholder="_" required/><label>TO</label>
                        </Card>                        
                    </Wrapper>
                <Button>Continuar</Button>
            </Container>
        </Layout>
    );
}


export default EnterLetter