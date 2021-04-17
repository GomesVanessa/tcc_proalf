import React from "react";
import styled from "styled-components";
import Layout from '../../components/Layout/Layout';
import Audio from '../../components/Audio/Audio';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

import Abacaxi from '../../Assets/a/abacaxi.png';
import Abelha from '../../Assets/a/abelha.png';
import Agulha from '../../Assets/a/agulha.png';
import Anel from '../../Assets/a/anel.png';
import Apito from '../../Assets/a/apito.png';
import Aranha from '../../Assets/a/aranha.png';
import Arvore from '../../Assets/a/arvore.png';
import Asas from '../../Assets/a/asas.png';
import Aviao from '../../Assets/a/aviao.png';
import Coelho from '../../Assets/a/coelho.png';
import Foguete from '../../Assets/a/foguete.png';
import Galinha from '../../Assets/a/galinha.png';
import Minhoca from '../../Assets/a/minhoca.png';
import Olhos from '../../Assets/a/olhos.png';
import Sino from '../../Assets/a/sino.png';

const Wrapper = styled.div`
  display: grid;
  height: 100%;    

 
`

const cards = [
  {image: Abacaxi}, {image:Sino}, {image: Abelha}, {image: Agulha}, {image:Minhoca},
  {image: Anel}, {image:Olhos}, {image:Foguete}, {image: Apito}, {image:Aranha},
  {image:Asas}, {image:Galinha}, {image:Coelho}, {image:Aviao}, {image:Arvore},      
]

const LetterA1 = ({children}) => { 
   return (
    <Wrapper> 
      <Layout>
        <Audio>{children}</Audio>
        {/* <Audio src= "../../../public/audio/A1.mp3" /> */}
          <CardsGrid>
            {cards.map(item => {
              return <Card image={item.image} />
            })}
          </CardsGrid>
            <Button>Continuar</Button>
      </Layout>
    </Wrapper>
  )
}
export default LetterA1
