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

const Wrapper = styled.div`
    display: grid;
    height: 100%;
    display: inline; 
    

    img{
        width: 200px;
        height: 400px;
        object-fit: contain;
    }
    
    div a img:hover {
        background:#65c728;
    }    
     
`;

const HomeVogais = () => {
  return(
    <Layout>
        <Container>
            <Audio />
                <Wrapper>
                    <div>                       
                        <a href="letra/a/1"><img src={hvA}  alt="Vogal A" /></a>
                        <a href="letra/e/1"><img src={hvE}  alt="Vogal E" /></a>
                        <a href="letra/i/1"><img src={hvI}  alt="Vogal I" /></a>
                        <a href="letra/o/1"><img src={hvO}  alt="Vogal O" /></a>
                        <a href="letra/u/1"><img src={hvU}  alt="Vogal U" /></a>                     
                    </div>              
                </Wrapper>
                <a href="/letra/a/1"><Button>Continuar</Button></a>
        </Container>
    </Layout>
  )
}

export default HomeVogais