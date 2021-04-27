import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout'; 
import Container from '../../components/Container/Container';
import imghome from './../../Assets/icons/imghome.jpg';
import Sara from '../../Assets/icons/sara.jpeg';
import Vanessa from '../../Assets/icons/vanessa.jpg';
import Vinicius from '../../Assets/icons/vinicius.jpeg';
import gabriela from '../../Assets/icons/gabriela.PNG';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';


const Wrapper = styled.div`
    p{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.25em;
        line-height: 1.4;
    }
    
    .imgcarrossel{
        width: 1024px;
        height: 400px;
     
    }
    h2{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.4em;
        font-style: italic;
        text-align: left;
    }
    hr{
        margin-top:-25px;
        margin-left:180px;
        border-top: 1px solid gray;
    }
    .imgfoto{ 
        width: 100px;
        height: 100px;
        border-radius: 50%;
    } 
    
   ${Button} {
        //display: flex;
        align-items: center; 
        height: 100%; 
    } 
`;

const AboutGrid = styled.div`
    display: flex;
    gap: 2em;
    
    div:nth-child(1){
        background-color:#D3D3D3;
        
    }
    div:nth-child(2){
        background-color:#D3D3D3;
        //border: 2px solid gray;
        //background-color: #f5f5f5;
    }
`;
const ImagesGrid = styled.div`
    background-color:#DCDCDC; 
    display: flex; 
    gap: 30px; 
    justify-content: center;
`;



const Home = () => { 
    return (
        <Layout> 
            <Container> 
                <Wrapper>
                    <section1> 
                        <img className="imgcarrossel" src={imghome} alt="vogais" /> 
                    </section1>
                    
                    <section>
                        <h2>Nossa parceria</h2><hr width="80%" align="left" />
                        <p>
                            Durante a pandemia do Covid-19 observamos a dificuldade enfrentada por pais e professores
                            para continuar o processo de alfabetização de crianças de 4 a 9 anos de idade. 
                            Unimo-nos para desenvolver esse site para auxiliá-los.  
                        </p>
                    </section>   

                    <section>
                        <h2>Quem Somos</h2><hr width="80%" align="left" />
                        <AboutGrid>
                            <Card>
                                <ImagesGrid>
                                    <img className="imgfoto" src={Sara}  alt="Alunos" />
                                    <img className="imgfoto" src={Vanessa} alt="Alunos" />
                                    <img className="imgfoto" src={Vinicius} alt="Alunos" /> 
                                </ImagesGrid>
                                
                                <p>
                                    Alunos do Curso de Desenvolvimento de Sistemas da Etec de Embu das Artes. Este site
                                    foi desenvolvimento durante o nosso Trabalho de Conclusão de Curso(TCC). 
                                    Somos gratos pela Doutora Gabriela e pela Editora BookToy que permitiram a utilização 
                                    do livro Proalf como base para o desenvolvimento desse site.
                                </p>
                            </Card>
                        
                        
                            <Card>
                                <ImagesGrid>
                                    <img className="imgfoto" src={gabriela} alt="Gabriela"  />
                                </ImagesGrid>
                                <p>
                                    Gabriela é pedagoga, formada pela FFCLRP-USP, psicopedagoga clínica e institucional, 
                                    além de mestre em Psicologia pela FFCLRP-USP e especialista em Neuropsicopedagogia e Educação
                                    Inclusiva, com aprimoramento em Neuroaprendizagem.  
                                </p>                        
                            </Card>
                        </AboutGrid>
                    </section> 
                </Wrapper>
                
            </Container>
        </Layout> 
    );
}  
  
export default Home