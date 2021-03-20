import Reac from "react"; 

import Layout from "./Layout"; 
import Header from "../Header"; 
import Content from "../Content"; 
import Footer from "../Footer"; 
import Card from "../Card"; 
  
export default{ 
    title: "Proalf/Layout", 
     component: Layout, 
    //     argTypes:(
    //         backgroundColor: 
    //)
}

export const LayoutProalf = () => {
    return( 
        <Layout > 
            <h1>Esse tcc.....</h1>
        </Layout>
    )
}

export const HeaderProalf = () => {
    return( 
        <Header> 
            <h1>Proalf</h1>
            <nav></nav>
               
        </Header>
    )
}

export const ContentProalf = () => {
    return( 
        <Content> 
     
        </Content>
    )
}

export const CardFalseActive = () => { 
    return <Card text = "Sino" image="https://via.placeholder.com/150" />
}

export const CardCorrectActive = () => { 
    return <Card text= "Abacaxi" image="https://via.placeholder.com/150" active={true} correct={true} /> 
}

export const FooterProalf = () => {
    return( 
        <Footer year="2021"> 
            TCC Etec Embu   |   Programa de alfabetização e estimulaçao cognitiva.   
        </Footer>
    )
}



