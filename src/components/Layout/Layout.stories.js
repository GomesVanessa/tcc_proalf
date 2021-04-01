import Layout from "./Layout"; 
//import Content from "../Content/Content";
//import CardsGrid from "../CardsGrid/CardsGrid";
import Button from "../Button/Button";
//import Card from"../Card/Card";
import Header from "../Header/Header";

  
export default{ 
    title: "Proalf/Layout", 
     component: Layout, 
}

export const Layout_ = () => {
    return( 
        <Layout > 
            <Header />
            <Button>VAnessa </Button>
                       
        </Layout>
    )
}



// export const HeaderProalf = () => {
//     return( 
//         <Header> 
//             <h1>Proalf</h1>
//             <nav></nav>
//         </Header>
//     )
// }




// export const CardFalseActive = () => { 
//     return <Card text = "Sino" image="https://via.placeholder.com/150" />
// }

// export const CardCorrectActive = () => { 
//     return <Card text= "Abacaxi" image="https://via.placeholder.com/150" active={true} correct={true} /> 
// }

// export const FooterProalf = () => {
//     return( 
//         <Footer year="2021">
//             TCC Etec Embu   |   Programa de alfabetização e estimulaçao cognitiva.   
//         </Footer>
//     )
// }



