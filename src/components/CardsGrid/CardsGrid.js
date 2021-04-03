/*import React from 'react'; 
import styled from 'styled-components';

import Card from '../../components/Card/Card';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 3em;
  //margin: 10px; 

  div{
    padding:40px;
    width: 40px;
    border:2px solid white; 
    border-radius: 5px;
    box-shadow: 0 0 2px 0px gray;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
}
`

const CardsGrid = ({ image, onClick}) => { 
  return( 
    <Wrapper>
      <Card src = {image} onClick = {onClick} />
    </Wrapper>
  )
}



export default CardsGrid 

/*const CardsGrid = ({onClick}) =>{
  const CardsGridLetterA =[
  {
      image: 'Abacaxi', 
      alt: 'Abacaxi', 
      correct: true
  }, 
  {
      image: 'Sino', 
      alt: 'Sino', 
      correct: false
  },
  {
      image: 'Abelha', 
      alt: 'Abelha', 
      correct: true
  },
  {
      image: 'Agulha', 
      alt: 'Agulha', 
      correct: true
  },
  {
      image: 'Minhoca', 
      alt: 'Minhoca', 
      correct: false
  },
  {
      image: 'Anel', 
      alt: 'Anel', 
      correct: true
  },
  {
      image: 'Olhos', 
      alt: 'Olhos', 
      correct: false
  },
  {
      image: 'Foguete', 
      alt: 'Foguete', 
      correct: false
  },
  {
      image: 'Apito', 
      alt: 'Apito', 
      correct: true
  },
  {
      image: 'Aranha', 
      alt: 'Aranha', 
      correct: true
  },
  {
      image: 'Asas', 
      alt: 'Asas', 
      correct: true
  },
  {
      image: 'Galinha', 
      alt: 'Galinha', 
      correct: false
  },
  {
      image: 'Coelho', 
      alt: 'Coelho', 
      correct: false
  },
  {
      image: 'Aviao', 
      alt: 'Aviao', 
      correct: true
  },
  {
      image: 'Arvore', 
      alt: 'Arvore', 
      correct: true
  }
]

  return(
    <CardsGrid onClick={onClick}>
      {CardsGridLetterA.map(item =>( 
        <CardsGridLetterA image = {item.image} />
      ))}
    </CardsGrid>
  )
}*/

