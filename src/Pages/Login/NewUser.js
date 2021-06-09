import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'; 

const Wrapper = styled.div`
  background: linear-gradient(180deg,#DCDCDC 0,#33aacc);
  min-height:100%;
  h1{
    color:#46494a;
    font-size: 2em;
    font-family: Gabriola;
  }
  h2{
    font-size: 1.6em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .link{
    text-decoration: none;
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
        <Link to='/home'><h1>Proalf</h1></Link>
          <h2 className="title">Crie sua Conta.</h2>
        </div>  
        <div className="card-group"> 
          <input type="name" name="name" placeholder="Digite seu nome." required/>
        </div> 
        <div className="card-group"> 
          <input type="email" name="email" placeholder="Digite seu e-mail." required/>
        </div>
        <div className="card-group"> 
          <input type="password" name="senha" placeholder="Digite sua senha." required/>
        </div>
        <div className="card-group"> 
          <input type="confirmpassword" name="senha" placeholder="Confirme a senha." required/>
        </div>

        <div className="card-group"> 
          <button type="submit"><Link>SALVAR</Link></button>
        </div>
      </div>
    </form>
  </Wrapper>
);
}

export default NewUser;