import Reac from "react"; 
import Layout from "./Layout"; 
import Header from "../Header/Header"; 
import Nav from "../Nav/Nav";
import Content from "../Content/Content"; 
import Footer from "../Footer/Footer"; 
import Card from"../Card/Card";

  
export default{ 
    title: "Proalf/Layout", 
     component: Layout, 
}

export const LayoutProalf = () => {
    return( 
        <Layout > 
            <h1><center>ALELUIA......KKKKK</center></h1>
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

export const NavTitle = () => {
    return( 
       <Nav Title='Proalf' Sobre='Sobre' Vogais='Vogais' Consoantes='Consoantes'/>
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



