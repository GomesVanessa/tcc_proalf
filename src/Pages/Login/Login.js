import React from "react";
import styled from "styled-components";
import login from "../../Assets/icons/login4.png";
import {Link} from 'react-router-dom'; 

const Wrapper = styled.div`
  background: linear-gradient(180deg,#DCDCDC 0,#33aacc);
  min-height:100%;
  h1{
    margin:0; 
        color: white;
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
    border:0px;
  }

  .card-group > button {
    background-color: #65c728;
    width: 100%;
    border-radius: 30px;
    padding:13px; 
    color: white;
    border:0px;
    outline:0px;
    font-weight:bolder;
    :hover{
    background-image:linear-gradient(to right, green, white);
    }    
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
    color: #46494a;
  }
  .footer{
    text-align: center;
    color: #46494a;
    font-size: 1.3em;
    margin-top: 1.3em;
  }
`;
const Linkk = styled(Link)`
  text-decoration: none;
`;

const Login = () => {
  return (
  <Wrapper>
    <form className="form" action="" >
      <div className="card">
        <div className="card-top"> 
        <Linkk to='/home'><h1>Proalf</h1></Linkk>
        
        <img className="imglogin" src={login} alt="login" /> 
            <h2 className="title">Acesso</h2>
        </div>       

        <div className="card-group"> 
          <input type="email" name="email" placeholder="Digite seu e-mail." required/>
        </div>

        <div className="card-group"> 
          <input type="password" name="senha" placeholder="Digite sua senha." required/>
        </div>

        <div className="card-group"> 
          <button type="submit">ENTRAR</button>
        </div>
        <h4>Esqueceu sua senha?<Linkk className='Linkk' to="/forgotPassword">  Clique aqui.</Linkk></h4>
        <h4>Não possui uma conta?<Linkk className='Linkk' to="/newUser">  Registre-se.</Linkk></h4>
      </div>
    </form>
  </Wrapper>
);
}

export default Login;