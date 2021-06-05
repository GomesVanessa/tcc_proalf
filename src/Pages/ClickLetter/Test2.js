import React, {useState} from 'react';
import styled from "styled-components";
import Card from '../../components/Card/Card';
import CardImage from '../../components/Card/CardImage';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import A from '../../../src/Assets/letters/A.JPG';
import P  from '../../../src/Assets/letters/P.JPG';

 
const Img = styled.img`
width: 130px;
height: 90px; 
object-fit: contain;
`;
 

function Test2(){
    const [color1, setColor1] = useState('#000');
    const [color2, setColor2] = useState('#000');
    const [color3, setColor3] = useState('#000');
    
    function validaErro1(){
      setColor1('#F00');
    }
    function validaAcerto2(){
        setColor2('#0F0');
    }
    function validaErro3(){
        setColor3('#F00');
    }

  
    return( 
        <> <h1>teste</h1> 
             {/* <CardsGrid>
            <CardImage >
                 <Img src={A} alt="A" onClick={validaErro1} CardImage={{borderColor: color1,}}/></CardImage> 
                {/* {items.map((item) => {
                    return <CardImage image ={item.image} value={letter} onClick={validaErro} style={{borderColor: color,}} />;    
                })} 
             <CardImage onClick={validaAcerto2} style={{borderColor: color2,}}> <Img src={A} alt="A" /></CardImage>
            <CardImage onClick={validaErro3} style={{borderColor: color3,}}> <Img src={A} alt="A" /></CardImage>
            </CardsGrid>
             */}
        </>
    );
  }

  export default Test2