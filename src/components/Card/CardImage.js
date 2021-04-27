import styled from 'styled-components';
import Card from './Card';

const Img = styled.img`
    width: 180px;
    height: 100px; 
    object-fit: contain;
`; 

const CardImage = ({text, image, ...rest}) => {
    return(
        <Card {...rest}>
            <Img src={image} alt={text} />
        </Card>
    )
}

export default CardImage