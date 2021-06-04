import React from 'react';
import {useState} from 'react'; 
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import CardImage from '../../components/Card/CardImage';
import Card from '../../components/Card/Card';
//import AudioAve from '../../../public/audio/Audio_A/tela2-nuvens.mp3';

import A from '../../../src/Assets/letters/A.JPG';
import ami from '../../../src/Assets/letters/ami.JPG';
import P  from '../../../src/Assets/letters/P.JPG';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 170px);
    grid-column-gap: 1em;
    grid-row-gap: 2.5em;
    font-size: .5em;
`; 


const AudioInstrucao = styled(Audio)`
    margin: 50px;
`;


//const ClickTest = () => {



function ClickLetter() { 

    const[letter, setLetter] = useState('');
    let card;
    if(card){ 
        
    }
    const [color, setColor] = useState('#000');
    const [answer, setAnswer] = useState(false); 

    React.useEffect(() => {
        setColor(() => answer  ? 'border-color:#0F0': 'border-color:#F00');
    }, [answer]);

    function validaLetter({target}){
        setLetter(target.value)
        //const pressLetter = target.value();
        if(items === 'A') {
            setAnswer(true);
        } else {
            alert('A borda do card precisa ficar verde')
            setAnswer(false);
        }
        
           
    }
    const items= [
        {image: A}, {image: P}
    ];
    return(
        <Layout>
            <Container>
                <AudioInstrucao />
                    <Wrapper>
                        <CardsGrid>
                            {items.map((item) => {
                                return <CardImage image ={item.image} value={letter} onChange={validaLetter} style={{outlineColor:color,}}/>;    
                            })}
                        </CardsGrid>                        
                    </Wrapper>
            </Container>
            <Link to="/enterLetterA"><Button>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickLetter;