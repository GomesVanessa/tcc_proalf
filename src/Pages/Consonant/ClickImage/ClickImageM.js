import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import ReactAudioPlayer from 'react-audio-player';
import telaClickImageM from '../../../Audios/M/telaClickImageM.mp3';
import Macaco from '../../../Assets/i/macaco.png';
import Vaca from '../../../Assets/consonants/M/Mimg/vaca.png';
import Magico from '../../../Assets/consonants/M/Mimg/magico.png';
import Sol from '../../../Assets/consonants/M/Mimg/sol.png';
import Suco from '../../../Assets/consonants/M/Mimg/suco.png';
import Mala from '../../../Assets/consonants/M/Mimg/mala.png';
import Melancia from '../../../Assets/consonants/M/Mimg/melancia.png';
import Morango from '../../../Assets/consonants/M/Mimg/morango.png';
import Moto from '../../../Assets/consonants/M/Mimg/moto.png';
import Palhaco from '../../../Assets/consonants/M/Mimg/palhaco.png';
import Meia from '../../../Assets/consonants/M/Mimg/meia.png';
import Milho from '../../../Assets/consonants/M/Mimg/milho.png';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 240px);
    grid-column-gap: 0.1em;
    grid-row-gap: 6em;
    font-size: .5em;
`; 

const CardClick = styled(Card)`
    width: 200px;
    height: 130px;
    margin:auto;
    cursor: pointer; 
        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
            transform: translate(0, -5px);  
        }   
`;

const Img = styled.img`
    margin:15px;
    width: 170px;
    height: 100px;
    object-fit: contain;
`;

const AudioInstrucao = styled(ReactAudioPlayer)`
    margin: 30px;
`;

const AudioCard = styled(ReactAudioPlayer)`
    margin: 5px;
    width: 190px;
    height: 30px;
`;

function ClickImageM(){  
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
    function validaErro4(){
        setColor4('#F00');
        setErros(erros+1);
    }
    function validaErro5(){
        setColor5('#F00');
        setErros(erros+1);
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
    function validaErro10(){
        setColor10('#F00');
        setErros(erros+1);
    }
    function validaAcerto11(){
        setColor11('#0F0');
        setAcertos(acertos+1);
    }
    function validaAcerto12(){
        setColor12('#0F0');
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
                <AudioInstrucao src={telaClickImageM} controls />                     
                    <Wrapper>
                        <CardClick onClick={validaAcerto1} style={{borderColor: color1,}}>
                            <Img src={Macaco} alt="Macaco" /> 
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro2} style={{borderColor: color2,}}>
                            <Img src={Vaca} alt="Vaca"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto3} style={{borderColor: color3,}}>
                            <Img src={Magico} alt="Magico"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro4} style={{borderColor: color4,}}>
                            <Img src={Sol} alt="Sol"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro5} style={{borderColor: color5,}}>
                            <Img src={Suco} alt="Suco"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto6} style={{borderColor: color6,}}>
                            <Img src={Mala} alt="Mala"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto7} style={{borderColor: color7,}}>
                            <Img src={Melancia} alt="Melancia"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto8} style={{borderColor: color8,}}>
                            <Img src={Morango} alt="Morango"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto9} style={{borderColor: color9,}}>
                            <Img src={Moto} alt="Moto"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaErro10} style={{borderColor: color10,}}>
                            <Img src={Palhaco} alt="Palhaco"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto11} style={{borderColor: color11,}}>
                            <Img src={Meia} alt="Meia"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>
                        <CardClick onClick={validaAcerto12} style={{borderColor: color12,}}>
                            <Img src={Milho} alt="Milho"/>
                            <AudioCard controls></AudioCard>
                        </CardClick>                        
                    </Wrapper>
            </Container>
            <Link to="/clickWordsM"><Button onClick={contacertos}>Continuar</Button></Link>
        </Layout>
    );
}

export default ClickImageM;