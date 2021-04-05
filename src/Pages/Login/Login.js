import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

`

const Login = () => {
  return (
    <Wrapper>
        <form>
        <label>Nome:<input type="text" name="name" />
        </label>
        <input type="submit" value="Enviar" />
        </form>
       </Wrapper>

);
}

export default Login;
