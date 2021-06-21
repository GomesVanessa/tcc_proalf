import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import ReactAudioPlayer from 'react-audio-player';
import homeVogaisA from '../../Audios/A/homeVogaisA.mp3';
import homeVogaisE from '../../Audios/E/homeVogaisE.mp3';
import homeVogaisI from '../../Audios/I/homeVogaisI.mp3';
import homeVogaisO from '../../Audios/O/homeVogaisO.mp3';
import homeVogaisU from '../../Audios/U/homeVogaisU.mp3';
import { Link } from 'react-router-dom';
import hvA from '../../Assets/homeVogais/hvA.jpg';
import hvE from '../../Assets/homeVogais/hvE.jpg';
import hvI from '../../Assets/homeVogais/hvI.jpg';
import hvO from '../../Assets/homeVogais/hvO.jpg';
import hvU from '../../Assets/homeVogais/hvU.jpg';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    a{
        margin: 0px 20px;
    }    
    img:hover {
        background:#65c728;
    }        
`;

const AudioInstrucao = styled(ReactAudioPlayer)`
    margin: 40px; 
`;

const Item = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
`;

const VogalImage = styled.img`
    height: 420px;
    width: 120px;
    object-fit: contain;
`; 

const AudioCard = styled(ReactAudioPlayer)`
    width: 130px;
    height: 30px;
`;

const HomeVogais = () => {
  return(
    <Layout>
        <Container>
            <AudioInstrucao controls/>
                <Wrapper>
                    <Item >
                        <AudioCard src={homeVogaisA} controls></AudioCard>
                        <Link to="ClickImageA">              
                            <VogalImage src={hvA}  alt="Vogal A" />
                        </Link> 
                    </Item>
                    <Item >
                        <AudioCard src={homeVogaisE} controls></AudioCard>
                        <Link to="ClickImageE">              
                            <VogalImage src={hvE}  alt="Vogal E" />
                        </Link>                   
                    </Item>
                    <Item >
                        <AudioCard src={homeVogaisI} controls></AudioCard>
                        <Link to="ClickImageI">              
                            <VogalImage src={hvI}  alt="Vogal I" />
                        </Link>                 
                    </Item>
                    <Item >
                        <AudioCard src={homeVogaisO} controls></AudioCard>
                        <Link to="ClickImageO">              
                            <VogalImage src={hvO}  alt="Vogal O" />
                        </Link>               
                    </Item>
                    <Item >
                        <AudioCard src={homeVogaisU} controls></AudioCard>
                        <Link to="ClickImageU">              
                            <VogalImage src={hvU}  alt="Vogal U" />
                        </Link>                  
                    </Item>                                
                </Wrapper>
                <Link to="ClickImageA"><Button>Continuar</Button></Link>
        </Container>
    </Layout>
  )
}

export default HomeVogais