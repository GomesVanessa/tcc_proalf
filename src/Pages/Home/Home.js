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
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    background-color:#FDFEFE; 
    /* @font-face {
        font-family: "Maria lucia" ;
        src: url('../../Fonts/Maria_lucia.ttf') format('truetype');
    } */
    
    p{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        //font-family:"Maria_lucia";
        font-size: 1.2em;
        line-height: 1.5;
        text-align: left;
        margin: 40px 40px 40px;
    }
    
    .imgcarrossel{
        width: 1024px;
        height: 550px;
    }
    h2{
        font-family: Gabriola;
        font-size: 2em;
        text-align: center;
        margin-top: 25px;
    }
    hr{ 
        /* 
	    border-color: #65c728; */
	    //background: #EAECEE;  
        width: 300px;
        border: 0; 
        height: 1px; 
        background-image: linear-gradient(to right, #f0f0f0, #00b9ff, #59d941, #f0f0f0);
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
    li{
        list-style: none; 
        margin: 45px;
        display: inline;
    }    
`;

const  Sectionparceria = styled.div`
    background-color:#F2F3F4 ;
    height: 270px;
`; 

const AboutGrid = styled.div`
    display: flex;
    gap: 2em;    
    
    div:nth-child(1){
       background-color:#FDFEFE;         
    }
    div:nth-child(2){
        background-color:#FDFEFE;
    }  
`;
const ImagesGrid = styled.div`
    display: flex; 
    gap: 30px; 
    justify-content: center;
`;

const Home = () => { 
    return (
        <Layout> 
            <Container> 
                <Wrapper>
                    <section> 
                        <img className="imgcarrossel" src={imghome} alt="vogais" />                     
                    </section> 

                    <section>
                        <h2>Programa de Alfabetiza????o e Estimula????o Cognitiva</h2>
                        <hr />
                        <p> 
                            O Proalf ?? um material de interven????o em alfabetiza????o, com embasamento em Neuroci??ncia, 
                            que envolve a etimula????o de habilidades cognitivas envolvidas na aprendizagem da leitura
                            e da escrita, como letras e fonemas, consci??ncia fonol??gica, mem??ria auditiva, percep????o 
                            visual e aten????o. 
                        </p>
                    </section>
                    
                    <Sectionparceria>
                        <br></br>
                        <h2>Nossa parceria</h2>
                        <hr />
                        <p>
                            Durante a pandemia do Covid-19 observamos a dificuldade enfrentada por pais e professores
                            para continuar o processo de alfabetiza????o de crian??as de 4 a 9 anos de idade. 
                            Unimo-nos para desenvolver esse site para auxili??-los.  
                        </p>
                    </Sectionparceria>   

                    <section>
                        
                        <h2>Quem Somos</h2>
                        <hr />
                        <AboutGrid>
                            <Card>
                                <ImagesGrid>
                                    <img className="imgfoto" src={Sara}  alt="Alunos" />
                                    <img className="imgfoto" src={Vanessa} alt="Alunos" />
                                    <img className="imgfoto" src={Vinicius} alt="Alunos" /> 
                                </ImagesGrid>
                                <p>
                                    <hr />
                                        <li>Sara </li>
                                        <li>Vanessa</li>
                                        <li>Vin??cius</li>
                                    <hr />
                                </p>
                                <p>
                                    Alunos do Curso de Desenvolvimento de Sistemas da Etec de Embu das Artes. Este site
                                    foi desenvolvimento durante o nosso Trabalho de Conclus??o de Curso(TCC). 
                                    Somos gratos pela Doutora Gabriela e pela <Link to="https://www.booktoy.com.br/">Editora BookToy</Link> que permitiram a utiliza????o 
                                    do livro Proalf como base para o desenvolvimento desse site.
                                </p>
                            </Card>
                        
                        
                            <Card>
                                <ImagesGrid>
                                    <img className="imgfoto" src={gabriela} alt="Gabriela"  />
                                </ImagesGrid>
                                <p>
                                    <hr />
                                        <li>Gabriela Guarnieri Mendes</li>
                                    <hr />
                                </p>
                                <p>
                                    Gabriela ?? pedagoga, formada pela FFCLRP-USP, psicopedagoga cl??nica e institucional, 
                                    al??m de mestre em Psicologia pela FFCLRP-USP e especialista em Neuropsicopedagogia e Educa????o
                                    Inclusiva, com aprimoramento em Neuroaprendizagem.  
                                </p>                        
                            </Card>
                        </AboutGrid>
                    </section> 
                </Wrapper>
            <Link to="/vogais"><Button>Iniciar Atividades</Button></Link>
            </Container>
        </Layout> 
    );
}  
  
export default Home