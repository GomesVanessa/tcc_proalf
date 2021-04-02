import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';


const Wrapper = styled.div`
    //font-size: 1.3em;
    //margin: 1em;
    //padding: 0.25em 1em;
    color: black;

    section{
        padding:60px;
        width: 400px;
        //border:2px solid gray; 
        //border-radius: 5px;
        box-shadow: 0 0 2px 0px gray;
    }
    
`

 const Home = () => { 
     return (
        <Wrapper >
            <div><center><h3>Nossa parceria</h3></center>
            <h1 className="top">O objetivo dessa união é disponibilizar essa aplicação gratuita para 
                auxiliar no processo de alfabetização de crianças de 4 a 9 anos de idade. 
            </h1></div>

            <center><h3>Quem Somos</h3></center>
            <section className="centro"> 
            <h1>Alunos do Curso de Desenvolvimento de Sistemas da Etec de Embu das Artes. Este projeto
                surgiu durante o desenvolvimento do nosso Trabalho de 
                Conclusão de Curso(TCC). 
                Somos gratos pela doutora Gabriela e pela Editora xx que permitiram a utilização 
                do livro Proalf como base para o desenvolvimento desse site. 
            </h1>
            </section>

            <blockquote cite="https://www.pensador.com/frase/ODc0MjY5/">
            <p>"Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua produção
                ou a sua construção” Paulo Freire</p>
            </blockquote>
        </Wrapper>
    );
}

export default Home