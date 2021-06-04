import React, {useState} from 'react';
import Card from '../../components/Card/Card';
import CardImage from '../../components/Card/CardImage';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import A from '../../../src/Assets/letters/A.JPG';
import P  from '../../../src/Assets/letters/P.JPG';



function Test2(){
    const [letter, setLetter] = useState(); 
    const [color, setColor] = useState('#000');
    const [answer, setAnswer] = useState(false);
    
    React.useEffect(() => {
        setColor(() => answer  ? '#0F0': '#F00');
    }, [answer]);

    function validaLetter({target}){
        setLetter(target.value)
        const image = target.value();
        
        if(image === 'A') {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    }

    const items= [{image: A}, {image: P}];

    return( 
        <> 
            <CardsGrid>
                {items.map((item) => {
                    return <CardImage image ={item.image} value={letter} onChange={validaLetter} style={{borderColor: color,}} />;    
                })}
            </CardsGrid> 
            
        </>
    );
}

export default Test2