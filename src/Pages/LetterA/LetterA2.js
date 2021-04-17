import React from "react";
import styled from "styled-components";

import Layout from '../../components/Layout/Layout';
import Nuvem from  '../../components/Nuvem/Nuvem'; 
import Audio from '../../components/Audio/Audio';
import Button from '../../components/Button/Button'


const Wrapper = styled.div`

`

const LetterA2 = () => {
  return (
    <Wrapper>
      <Layout >
        <Audio />
        <Nuvem>

        </Nuvem>

        <Button>Continuar</Button>       
        </Layout>
    </Wrapper>

);
}

export default LetterA2;
