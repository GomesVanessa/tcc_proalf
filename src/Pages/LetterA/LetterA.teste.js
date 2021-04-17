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

const LetterA1 = ({children}) => { 
   return (
    <Wrapper> 
      <Layout>
        <Audio />
          <CardsGrid>{children}</CardsGrid>
            <Button>Continuar</Button>
      </Layout>
    </Wrapper>
  )
}
export default LetterA1
