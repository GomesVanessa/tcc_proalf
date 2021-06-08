import React from "react";
import styled from "styled-components";
import login from "../../Assets/icons/login4.png";

const Wrapper = styled.div`
  background: linear-gradient(180deg,#DCDCDC 0,#33aacc);
  min-height:100%;
  h1{
    color:#46494a;
    font-size: 1.5em;
    font-style: italic;
  }
  h2{
    font-size: 1.5em;

  }
  .form{
    font-family: Gabriola;
    width:500px; 
    margin: auto; 
    padding-top: 200px;
    text-align: center;
  }
  .card{
      background-color: white; 
      //box-shadow: 1px 1px 5px #ccc; 
      box-shadow: 10px 5px 5px #46494a;
      padding: 30px; 
      border-radius: 50px; 
  }
  .card-top{
      text-align: center; 
  }
  .card-group{ 
    margin-bottom:20px;
    
  }
  .card-group > input{
    outline: 0;
    width: 97%;
    height: 25px; 
    padding: 5px;
    text-align: center; 
    font-size: 1.3em;
    border-radius: 30px;
    margin: 10px;
  }

  .card-group > button {
    background-color: #65c728;
    width: 100%;
    border-radius: 30px;
    padding:15px; 
    color: white;
    border:0px;
    outline:0px;
  }
  .card-group-btn:hover{
    background-image:linear-gradient(to right, green, white);
  }
  .imglogin{
    border-radius: 50px;
    width: 50px;
    box-shadow: 0px 0px 5px #ccc; 
  }
  .title{
    color: #46494a;
  }
  .footer{
    text-align: center;
    color: #46494a;
    font-size: 1.3em;
    margin-top: 1.3em;
  }
`;


const NewUser = () => {
  return (
  <Wrapper>
    <form className="form" action="#">
      <div className="card">
        <div className="card-top"> 
        <h1>Crie sua Conta no Proalf</h1>
        
        
        </div>       

        <div class="card-group"> 
          <input type="name" name="name" placeholder="Digite seu nome." required/>
          <input type="lastName" name="lastName" placeholder="Digite seu sobrenome." required/>
        </div>

        <div class="card-group"> 
          <input type="password" name="senha" placeholder="Senha" required/>
          <input type="password" name="senha" placeholder="Confirmar" required/>
        </div>

        <div class="card-group"> 
          <button type="submit">Salvar</button>
        </div>

        {/* <hr width="40%" align="left" /> <center><h2>ou</h2></center> <hr width="40%" align="right" />
        
        <div class="card-group-facebook"> 
          <button className="facebook" type="submit">Continue com o Facebook</button>
        </div>

        <div class="card-group-gmail"> 
          <button className="gmail" type="submit">Continue com o Gmail</button>
        </div> */}
    </div>
    </form>
  </Wrapper>
);
}

export default NewUser;