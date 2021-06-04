import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Audio from '../../components/Audio/Audio';

import hvA from '../../Assets/homeVogais/hvA.jpg';
import hvE from '../../Assets/homeVogais/hvE.jpg';
import hvI from '../../Assets/homeVogais/hvI.jpg';
import hvO from '../../Assets/homeVogais/hvO.jpg';
import hvU from '../../Assets/homeVogais/hvU.jpg';
import { Link } from 'react-router-dom';

//import VogalA from '../../../public/audio/Audio_A/abacaxi.mp3';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;

    img{
        border: .8px solid black;
    }

    a{
        margin: 0px 20px;
        //flex:1;
    }
    
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

const VogalImage = styled.img`
    height: 360px;
    object-fit: contain;

`; 

const HomeVogais = () => {
  return(
    <Layout>
        <Container>
            <AudioInstrucao icon={false}/>
                <Wrapper>
                    <Item >
                        <Audio controls={false} icon={true} /> 
                        <Link to="letra/a/1">              
                            <VogalImage src={hvA}  alt="Vogal A" />
                        </Link> 
                    </Item>
                    <Item >
                        <Audio controls={false} icon={true} /> 
                        <Link to="letra/e/1">              
                            <VogalImage src={hvE}  alt="Vogal E" />
                        </Link>                   
                    </Item>
                    <Item >
                        <Audio controls={false} icon={true} /> 
                        <Link to="letra/i/1">              
                            <VogalImage src={hvI}  alt="Vogal I" />
                        </Link>                 
                    </Item>
                    <Item >
                        <Audio controls={false} icon={true} /> 
                        <Link to="letra/o/1">              
                            <VogalImage src={hvO}  alt="Vogal O" />
                        </Link>               
                    </Item>
                    <Item >
                        <Audio controls={false} icon={true} />
                        <Link to="letra/u/1">              
                            <VogalImage src={hvU}  alt="Vogal U" />
                        </Link>                  
                    </Item>                                
                </Wrapper>
                <Link to="/letra/a/1"><Button>Continuar</Button></Link>
        </Container>
    </Layout>
  )
}

export default HomeVogais