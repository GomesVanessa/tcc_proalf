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

const Wrapper = styled.div`

    .imgcarrossel{
        width: 1000px;
        height: 150px;
    }
    h2{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.5em;
        font-style: italic;
        text-align: left;
    }
    h3{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2em;
        line-height: 1.5;
        text-align: left
    }
    hr{
        margin-top:-25px;
        margin-left:180px;
        border-top: 1px solid gray;
    }
     /* .container{
        width: 100px; 
        height: 100px;
        display: inline-block; 
        object-fit: contain;
    }  */
    .imgfoto{ 
        width: 100px;
        height: 100px;
        border-radius: 50%;
        
    }   
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
                        <h3>Durante a pandemia do Covid-19 observamos a dificuldade enfrentada por pais e professores
                            para continuar o processo de alfabetização de crianças de 4 a 9 anos de idade. 
                            Unimo-nos para desenvolver esse site para auxiliá-los.  
                        </h3>  
                        <br>
                        </br>  
                    </section>   

                    <section>
                        <h2>Quem Somos</h2><hr width="80%" align="left" />
                      
                        <div className="container">
                            <img className="imgfoto" src={Sara}  alt="Alunos" />
                            <img className="imgfoto" src={Vanessa} alt="Alunos" />
                            <img className="imgfoto" src={Vinicius} alt="Alunos" /> 
                            <h3>Alunos do Curso de Desenvolvimento de Sistemas da Etec de Embu das Artes. Este site
                                foi desenvolvimento no nosso Trabalho de Conclusão de Curso(TCC). 
                                Somos gratos pela Doutora Gabriela e pela Editora BookToy que permitiram a utilização 
                                do livro Proalf (Programa de alfabetização e estimulaçao cognitiva) como base para o 
                                desenvolvimento desse site.
                            </h3>
                        </div>
                       
                    
                        <div className="container">
                            <img className="imgfoto" src={gabriela} alt="Gabriela"  />
                            <h3>Gabriela é pedagoga, formada pela FFCLRP-USP, psicopedagoga clínica e institucional, 
                                além de mestre em Psicologia pela FFCLRP-USP e especialista em Neuropsicopedagogia e Educação
                                Inclusiva, com aprimoramento em Neuroaprendizagem.  
                            </h3>
                        </div>
                    </section>   
                    <Button>Começar</Button>
                </Wrapper>
                
            </Container>
        </Layout> 
    );
}  
  
export default Home