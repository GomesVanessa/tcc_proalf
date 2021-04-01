import CardsGrid from './CardsGrid';

export default { 
    title: "Proalf/CardsGrid", 
    component: CardsGrid,
}; 

export const CardsGrid_ = () => {
    const funcao = function() {
        alert('Alerta')
    }
    return(
        <CardsGrid onClick={funcao}>TESTE</CardsGrid>
    )
}
