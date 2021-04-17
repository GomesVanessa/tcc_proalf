import CardsGrid from '../../components/CardsGrid/CardsGrid';
import LetterA1 from './LetterA1';
import Audio from '../../components/Audio/Audio';


export default { 
    title: 'Proalf/Telas/LetterA1', 
    component: LetterA1
}; 

export const LetterA1_ = ({children}) => {
    return(
        <LetterA1>
            <CardsGrid>{children}</CardsGrid>
        </LetterA1>
    )
}

