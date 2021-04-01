import Card from "./Card";
  
export default{ 
    title: "Proalf/Card", 
     component: Card,
}

export const CardTrue = () => {
    return( 
        <Card text="" image="" active={true} correct={true} />
    )
}

export const CardFalse = () => {
    return( 
        <Card text="" image="" active={false} correct={false} />
    )
}