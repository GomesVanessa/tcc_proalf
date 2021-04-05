import React from "react";
import styled from "styled-components";

import Layout from '../../components/Layout/Layout';
import Audio from '../../components/Audio/Audio';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

const Wrapper = styled.div`
  display: grid;
  height: 100%;   
`

const LetterA1 = () => { 
  return (
    <Wrapper> 
      <Layout title="Proalf">
        <Audio />
          <CardsGrid />
            <Button>Continuar</Button>
      </Layout>
    </Wrapper>
  )
}

export default LetterA1
