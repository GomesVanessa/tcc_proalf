import CardsGrid from './CardsGrid';
import Card from '../Card/Card';

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


export default { 
    title: "Proalf/CardsGrid", 
    component: CardsGrid,
}; 

const cards = [
  {image: Abacaxi}, {image:Sino}, {image: Abelha}, {image: Agulha}, {image:Minhoca},
  {image: Anel}, {image:Olhos}, {image:Foguete}, {image: Apito}, {image:Aranha},
  {image:Asas}, {image:Galinha}, {image:Coelho}, {image:Aviao}, {image:Arvore},      
]
  
export const CardsGrid_ = () => {
  return <CardsGrid>
    {cards.map(item => {
      return <Card image={item.image} />
    })}
  </CardsGrid>
}
      

    
