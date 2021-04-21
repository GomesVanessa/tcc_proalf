import React from "react";
import styled from "styled-components";
import Content from "../../components/Content/Content";


import login from "../../Assets/icons/login4.png";

const Wrapper = styled.div`
  .form{
    font-family: sans-serif;
    width:500px; 
    margin: auto; 
    padding-top: 200px;
    text-align: center;
  }
  .card{
      background-color: white; 
      box-shadow: 1px 1px 5px #ccc; 
      padding: 30px; 
      border-radius: 50px; 
  }
  .card-top{
      text-align: center; 
  }
  .card-group{ 
    margin-bottom:10px;
  }
  .card-group > input{
    border-radius: 5px; 
    outline: 0;
    width: 100%;
    height: 25px; 
    padding: 5px;
    text-align: center; 
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
  .facebook{
    width: 100%;
    border-radius: 30px;
    padding:15px;
    border:0px;
    outline:0px;
    color:white;
    background-color:rgb(67,100,175)  
  }
  .gmail{
    width: 100%;
    border-radius: 30px;
    padding:15px;
    border:0px;
    outline:0px;
    color:white;
    background-color: rgb(67,129,240);
    margin-top:15px;
  }
  .imglogin{
    border-radius: 50px;
    width: 50px;
    box-shadow: 0px 0px 5px #ccc; 
  }
  .title{
    color: black;
  }
  `;

const Login = () => {
  return (
  <Content>
  <Wrapper>
    <form className="form" action="#">
      <div className="card">
        <div className="card-top"> 
          <img className="imglogin" src={login} alt="login" /> 
            <h2 className="title">Acesso</h2>
        </div>       

        <div class="card-group"> 
          <input type="email" name="email" placeholder="Digite seu e-mail." required/>
        </div>

        <div class="card-group"> 
          <input type="password" name="senha" placeholder="Digite sua senha." required/>
        </div>

        <div class="card-group"> 
          <button type="submit">ENTRAR</button>
        </div>

        {/* <hr width="40%" align="left" /> <center><h2>ou</h2></center> <hr width="40%" align="right" />
        
        <div class="card-group-facebook"> 
          <button className="facebook" type="submit">Continue com o Facebook</button>
        </div>

        <div class="card-group-gmail"> 
          <button className="gmail" type="submit">Continue com o Gmail</button>
        </div> */}

        <h5>Esqueceu sua senha? Clique aqui.</h5>
        <h5>Não possui uma conta? Registre-se.</h5>
      </div>
    </form>
  </Wrapper>
  </Content>
);
}

export default Login;