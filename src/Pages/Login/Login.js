import React from "react";
import styled from "styled-components";
import login from "../../Assets/icons/login4.png";

import Background from '../../Assets/icons/alfabeto.jpg';

const Wrapper = styled.div`
  //background: #DCDCDC; 
  //background: rgb(51,170,204);
  // background: linear-gradient(90deg,#33aacc 0,#2eb3d9);
  background: linear-gradient(180deg,#DCDCDC 0,#33aacc);
  min-height:100%;
  h1{
    color:#46494a;
    font-size: 1.8em;
    font-style: italic;
  }
  h2{
    font-size: 1.6em;

  }
  .form{
    font-family: sans-serif;
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
    color: #46494a;
  }
  .footer{
    text-align: center;
    color: #46494a;
    font-size: 1.3em;
    margin-top: 1.3em;
  }
`;

// function Login(){ 
//   const [user, setUser] = useState('')
//   const [password, setPassword] = useState('')

//   let login; 
  
//   const history = useHistory(); 

//   function handleSubmit(event){ 
//     event.preventDefault(); 

//     axios 
//       .post('http://localhost/proalf')
//       .then(response=>{
//         const results = response.data.dados; 

//         if(user === '' || password === ''){ 
//           alert('Preencha todos os campos.'); 
//         }else{
//           login = results.some(({usuario, senha}) => {
//             return usuario === user && senha === password; 
//           }); 
//         }

//         if(login){
//           history.push('/Login'); 
//           setTimeout(()=>{
//             history.push('/home'); 
//           }, 4000); 
//             alert('Dados Incorretos'); 
//         }
//       }).catch(err=> {
//         alert('Servidor Indisponível')
//   })
// }

const Login = () => {
  return (
  <Wrapper>
    <form className="form" action="#">
      <div className="card">
        <div className="card-top"> 
        <h1>Proalf</h1>
        
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

        <h4>Esqueceu sua senha? Clique aqui.</h4>
        <h4>Não possui uma conta? Registre-se.</h4>
      </div>
    </form>
  </Wrapper>
);
}

export default Login;