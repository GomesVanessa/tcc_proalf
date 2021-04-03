import React from 'react';
import styled from 'styled-components';
import flor from '../../Assets/icons/flor.jpg';
import gabriela from '../../Assets/icons/gabriela.jpg';

const Wrapper = styled.div`
    //font-size: 1.3em;
    //margin: 1em;
    //padding: 0.25em 1em;
    color: black;

    div{ 
        align-items: center;
    }


    section{
        width: 40%;
        min-width: 100px;
        display: inline-block;
        vertical-align: top;
        margin-right:30px;
        //background-color:#F5FFFA;
        background: linear-gradient(90deg,#f7fdff 0,#ebf4f7);
        

        //padding:60px;
       // width: 400px;
        border:2px solid white; 
        border-radius: 5px;
        box-shadow: 0 0 2px 0px white;
        
    }

        p{
            display: flex;
            height: 200px;
            background-color: #adadad;
        }
    
    
`

    const Home = () => { 
        return (
        <Wrapper >
            <div><h3>Nossa parceria</h3>
            <h1 className="top">Durante a pandemia nos reunimos para disponibilizar essa aplicação gratuita para 
                auxiliar no processo de alfabetização de crianças de 4 a 9 anos de idade. 
            </h1></div>

            <h3>Quem Somos</h3>
            <section className="Alunos"> 
            <img src={flor} alt="Alunos" width="200" />
            <h5>Alunos do Curso de Desenvolvimento de Sistemas da Etec de Embu das Artes. Este projeto
                surgiu durante o desenvolvimento do nosso Trabalho de 
                Conclusão de Curso(TCC). 
                Somos gratos pela Doutora Gabriela e pela Editora BookToy que permitiram a utilização 
                do livro Proalf como base para o desenvolvimento desse site. 
            </h5>
            </section>

            <section className="Gabriela">
            <img src={gabriela} alt="Alunos" width="200" /> 
            <h5>Gabriela Guarnieri Mendes é pedagoga, formada pela FFCLRP-USP, psicopedagoga clínica e institucional, 
                além de mestre em Psicologia pela FFCLRP-USP e especialista em Neuropsicopedagogia e Educação
                Inclusiva, com aprimoramento em Neuroaprendizagem.  
            </h5>
            </section>
            
            <blockquote cite="https://www.pensador.com/frase/ODc0MjY5/">
            <p><h3>"Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua produção
                ou a sua construção”  Paulo Freire </h3></p>
            </blockquote>
           
        </Wrapper>
    );
}

export default Home