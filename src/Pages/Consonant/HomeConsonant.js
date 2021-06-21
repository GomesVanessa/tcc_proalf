import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import ReactAudioPlayer from 'react-audio-player';

import hcf from '../../Assets/homeConsonants/hcf.jpg';
import hcj from '../../Assets/homeConsonants/hcj.jpg';
import hcm from '../../Assets/homeConsonants/hcm.jpg';
import hcn from '../../Assets/homeConsonants/hcn.jpg';
import { Link } from 'react-router-dom';

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

const ConsonantImage = styled.img`
    height: 420px;
    width: 120px;
    object-fit: contain;
`; 

const AudioCard = styled(ReactAudioPlayer)`
    width: 130px;
    height: 30px;
`;

const HomeConsonants = () => {
  return(
    <Layout>
        <Container>
            <AudioInstrucao controls/>
                <Wrapper>
                    <Item >
                        <AudioCard controls></AudioCard>
                        <Link to="/fMenu">              
                            <ConsonantImage src={hcf}  alt="Consoante F" />
                        </Link> 
                    </Item>
                    <Item >
                        <AudioCard controls></AudioCard>
                        <Link to="/jMenu">              
                            <ConsonantImage src={hcj}  alt="Consoante J" />
                        </Link> 
                    </Item>
                    <Item >
                        <AudioCard controls></AudioCard>
                        <Link to="/mMenu">              
                            <ConsonantImage src={hcm}  alt="Consoante M" />
                        </Link> 
                    </Item>
                    <Item >
                        <AudioCard controls></AudioCard>
                        <Link to="/nMenu">              
                            <ConsonantImage src={hcn}  alt="Consoante N" />
                        </Link> 
                    </Item>                                     
                </Wrapper>
                <Link to="clickImageF"><Button>Continuar</Button></Link>
        </Container>
    </Layout>
  )
}

export default HomeConsonants