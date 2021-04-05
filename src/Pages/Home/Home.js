import React from 'react';
import styled from 'styled-components';
import Alunos from '../../Assets/icons/alunos.jpg';
import gabriela from '../../Assets/icons/gabriela.PNG';
import Button from '../../components/Button/Button';

const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2;

    div{
        display: flex;
        margin: 10px;
        border: 2px solid white;
        //flex-direction: row;
    }

    img{        
        width: 400px;
        height: 200px;
        margin: 20px 20px 20px 250px;
    }
    .Gabriela{
        width: 200px;
        height: 200px;
    }
    .gambiarra{
        border:none;
    }
    blockquote{
        border: 2px;
        background: linear-gradient(90deg,#33ccab 0,#33a3cc);
        width: 1600px;
        height: 200px;
        /* display:flex;
        text-align: center; */
        
        
    }
    p{
        line-height: 2;
        color:white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      

    }

`

const Home = () => { 
    return (        
        <Wrapper>
            <h2>Nossa parceria</h2>
            <h3>Durante a pandemia do Covid-19 observamos a dificuldade enfrentada por pais e professores
                para continuar o processo de alfabetização de crianças de 4 a 9 anos de idade. 
                Nos unimos para desenvolver esse site para auxiliá-los.  
            </h3>  
            <br>
            </br>         

            <h2>Quem Somos</h2>
            
            <div className="gambiarra">
                <img src={Alunos} alt="Alunos" /> 
                <img className="Gabriela" src={gabriela} alt="Gabriela"  />
            </div>

            {/* <div>
            <h3>Sara | Vanessa | Vinícius</h3>
            <h3>Gabriela Guarnieri Mendes</h3>
            </div>  */}
             
            <div className="gambiarra">
            <div>
            <h3>Alunos do Curso de Desenvolvimento de Sistemas da Etec de Embu das Artes. Este projeto
                foi desenvolvimento no nosso Trabalho de 
                Conclusão de Curso(TCC). 
                Somos gratos pela Doutora Gabriela e pela Editora BookToy que permitiram a utilização 
                do livro Proalf (Programa de alfabetização e estimulaçao cognitiva) como base para o 
                desenvolvimento desse site.
            </h3> 
            </div>  

            <div>
            
            <h3>Gabriela é pedagoga, formada pela FFCLRP-USP, psicopedagoga clínica e institucional, 
                além de mestre em Psicologia pela FFCLRP-USP e especialista em Neuropsicopedagogia e Educação
                Inclusiva, com aprimoramento em Neuroaprendizagem.  
            </h3>           
            </div>
            </div>
            
            <blockquote cite="https://www.pensador.com/frase/ODc0MjY5/">
            <p><h3>"Ensinar não é transferir conhecimento, mas criar as possibilidades<br></br>
                    para a sua produção ou a sua construção”<br></br>
                    Paulo Freire </h3></p>
            </blockquote>
            
        </Wrapper>
        
    );
}

export default Home