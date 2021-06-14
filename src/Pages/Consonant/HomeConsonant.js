import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Audio from '../../components/Audio/Audio';
import hcf from '../../Assets/homeConsonants/hcf.jpg';
import hcj from '../../Assets/homeConsonants/hcj.jpg';
import hcm from '../../Assets/homeConsonants/hcm.jpg';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;    
    img:hover {
        background:#65c728;
    }    
     
`;

const AudioInstrucao = styled(Audio)`
    margin: 40px; 
`;

const Item = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    ${Audio}{
        margin: 10px;
    }
`;

const ConsonantImage = styled.img`
    height: 390px;
    width: 110px;
    
    object-fit: contain;

`; 

const HomeConsonants = () => {
  return(
    <Layout>
        <Container>
            <AudioInstrucao icon={false}/>
                <Wrapper>
                    <Item >
                        <Audio controls={false} icon={true} /> 
                        <Link to="/fMenu">              
                            <ConsonantImage src={hcf}  alt="Consoante F" />
                        </Link> 
                    </Item>
                    <Item >
                        <Audio controls={false} icon={true} /> 
                        <Link to="">              
                            <ConsonantImage src={hcj}  alt="Consoante J" />
                        </Link> 
                    </Item>
                    <Item >
                        <Audio controls={false} icon={true} /> 
                        <Link to="">              
                            <ConsonantImage src={hcm}  alt="Consoante M" />
                        </Link> 
                    </Item>
                                     
                </Wrapper>
                <Link to="clickImageF"><Button>Continuar</Button></Link>
        </Container>
    </Layout>
  )
}

export default HomeConsonants