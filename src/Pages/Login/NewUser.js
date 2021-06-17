import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'; 

const Wrapper = styled.div`
  background: linear-gradient(180deg,#DCDCDC 0,#33aacc);
  min-height:100%;
  h1{
    margin:0; 
        color: #FCFCFC;
        font-size: 3em;
        font-style: italic;
        font-family: Gabriola;
        text-shadow: black 0.1em 0.1em 0.1em;  
  }
  h2{
    font-size: 1.6em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .form{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width:500px; 
    font-size: 1em;
    margin: auto; 
    padding-top: 200px;
    text-align: center;
  }
  .card{
      background-color: #E5E7E9; 
      box-shadow: 10px 5px 5px #46494a;
      padding: 30px; 
      border-radius: 50px; 
      text-align: center; 
  }
  input{
    outline: 0;
    width: 97%;
    height: 25px; 
    padding: 5px;
    text-align: center; 
    font-size: 1.3em;
    border-radius: 30px;
    margin-top: 15px;
    border:0px;
  }

  button {
    background-color: #65c728;
    width: 100%;
    border-radius: 30px;
    padding:13px; 
    color: white;
    border:0px;
    outline:0px;
    font-weight:bolder;
    margin-top: 20px;
    :hover{
    background-image:linear-gradient(to right, green, white);
  }
  }
  .file{
    text-align: center;
    display: block;
    margin-top: 10px;
    cursor: pointer;
  }
  .cardimg{
    background-color: white; 
    width: 40%;
    height: 100px;
    text-align: center;   
}
`;

const Linkk = styled(Link)`
  text-decoration: none;
`;

const NewUser = () => {
  return (
  <Wrapper>
    <form className="form" action="" >
      <div className="card">
        <Linkk to='/home'><h1>Proalf</h1></Linkk>      
          <h2 className="title">Cadastre-se.  </h2>  
          <div className="cardimg">
          <label>Selecione a foto.</label>
          <input className= "file" type="file" name="image" />  
          </div>
          <input type="name" name="name" placeholder="Digite seu nome." required/>
          <input type="date" name="date" required/>
          <input type="email" name="email" placeholder="Digite seu e-mail." required/>
          <input type="password" name="senha" placeholder="Digite sua senha." required/>
          <input type="password" name="senha2" placeholder="Confirme a senha." required/>
          <button type="submit">Cadastrar</button>
      </div>
    </form>
  </Wrapper>
);
}

export default NewUser;