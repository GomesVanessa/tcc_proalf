import CardsGrid from './CardsGrid';


export default { 
    title: "Proalf/CardsGrid", 
    component: CardsGrid,
}; 

export const CardsGrid_ = () => {
    const funcao = function(correct, active) {
        if(correct && active){
            return`
            border: 2px solid green`
        }else{
            return`
            border: 2px solid red;`
        }
    }
    return(
        <CardsGrid onClick={funcao}>
            
        </CardsGrid>
    )
}

