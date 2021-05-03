import React from "react";
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Audio from '../../components/Audio/Audio';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import Card from '../../components/Card/CardImage';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import atividades from '../../atividades'; 
import {useParams} from "react-router"; 

const Wrapper = styled.div`
  display: grid;
  height: 100%;   
 
  /* ${Container} {
    margin-top: 100px; 
  } */
`;

const Letter = () => { 
  const {letter, id} = useParams(); 
  const atividade = (atividades[letter] || []) [id-1] || null;
  if(!atividade) 
  return (
    <Wrapper> 
      <Layout>
        <Container>
          <h1>Página não encontrada.</h1>
        </Container>
      </Layout>
    </Wrapper>
  );
  return (
    <Wrapper> 
      <Layout>
        <Container>
          <Audio src={atividade.audio} />
          <CardsGrid>
            {(atividade.cards || []).map((item) => {
              return <Card image ={item.image}/>;
            })}
          </CardsGrid>
          <Button>Continuar</Button>
        </Container>
      </Layout>
    </Wrapper>
  );
}

export default Letter
