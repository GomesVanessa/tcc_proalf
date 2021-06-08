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
        //border: .8px solid black;
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
    height: 390px;
    width: 110px;
    
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
                        <Link to="ClickImageA">              
                            <VogalImage src={hvA}  alt="Vogal A" />
                        </Link> 
                    </Item>
                    <Item >
                        <Audio controls={false} icon={true} /> 
                        <Link to="ClickImageE">              
                            <VogalImage src={hvE}  alt="Vogal E" />
                        </Link>                   
                    </Item>
                    <Item >
                        <Audio controls={false} icon={true} /> 
                        <Link to="ClickImageI">              
                            <VogalImage src={hvI}  alt="Vogal I" />
                        </Link>                 
                    </Item>
                    <Item >
                        <Audio controls={false} icon={true} /> 
                        <Link to="ClickImageO">              
                            <VogalImage src={hvO}  alt="Vogal O" />
                        </Link>               
                    </Item>
                    <Item >
                        <Audio controls={false} icon={true} />
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