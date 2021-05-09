import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';

import Vogal_A from '../../Assets/homeVogais/vogal_A.jpeg';
import Vogal_E from '../../Assets/homeVogais/vogal_E.jpeg';
import Vogal_I from '../../Assets/homeVogais/vogal_I.jpeg';
import Vogal_O from '../../Assets/homeVogais/vogal_O.jpeg';
import Vogal_U from '../../Assets/homeVogais/vogal_U.jpeg';

import A from '../../Assets/a/letterA4/A.JPG';
import ami from '../../Assets/a/letterA4/ami.JPG';
import a_cur from '../../Assets/a/letterA4/a_cur.JPG';
import acur from '../../Assets/a/letterA4/acur.JPG';

import E from '../../Assets/a/letterA4/E.JPG';
import emi from '../../Assets/a/letterA4/emi.JPG';
import e_cur from '../../Assets/a/letterA4/e_cur.JPG';
import ecur from '../../Assets/a/letterA4/ecur.JPG';

import I from '../../Assets/a/letterA4/I.JPG';
import imi from '../../Assets/a/letterA4/imi.JPG';
import i_cur from '../../Assets/a/letterA4/i_cur.JPG';
import icur from '../../Assets/a/letterA4/icur.JPG';

import O from '../../Assets/a/letterA4/O.JPG';
import omi from '../../Assets/a/letterA4/omi.JPG';
import o_cur from '../../Assets/a/letterA4/o_cur.JPG';
import ocur from '../../Assets/a/letterA4/ocur.JPG';

import U from '../../Assets/a/letterA4/U.JPG';
import umi from '../../Assets/a/letterA4/umi.JPG';
import u_cur from '../../Assets/a/letterA4/u_cur.JPG';
import ucur from '../../Assets/a/letterA4/ucur.JPG';



const Wrapper = styled.div`
    display: grid;
    height: 100%;
   
    img{
        width: 150px;
        height: 150px;
        object-fit: contain; 
    }
    
    li {
        list-style: none; 
        display: inline;
    }
    li a {
        padding: 5px 10px;       
    }
    li a img:hover {
        background:#65c728;
        color: #000; 
    }    
`

const HomeVogais = () => {
  return(
    <Layout>
        <Container>
            <Wrapper>
                <ul>
                    <li>
                        <a href="letra/a/1"><img src={Vogal_A}  alt="Vogal A" /></a>
                        <a href="letra/e/1"><img src={Vogal_E}  alt="Vogal E" /></a>
                        <a href="letra/i/1"><img src={Vogal_I}  alt="Vogal I" /></a>
                        <a href="letra/o/1"><img src={Vogal_O}  alt="Vogal O" /></a>
                        <a href="letra/u/1"><img src={Vogal_U}  alt="Vogal U" /></a>
                    </li>

                    <li>
                        <a href="letra/a/1"><img src={A}  alt="Vogal A" /></a>                        
                        <a href="letra/e/1"><img src={E}  alt="Vogal E" /></a>
                        <a href="letra/i/1"><img src={I}  alt="Vogal I" /></a>
                        <a href="letra/o/1"><img src={O}  alt="Vogal O" /></a>
                        <a href="letra/u/1"><img src={U}  alt="Vogal U" /></a>
                    </li>

                    <li>
                        <a href="letra/a/1"><img src={ami}  alt="Vogal A" /></a>
                        <a href="letra/e/1"><img src={emi}  alt="Vogal E" /></a>                         
                        <a href="letra/i/1"><img src={imi}  alt="Vogal I" /></a>
                        <a href="letra/o/1"><img src={omi}  alt="Vogal O" /></a> 
                        <a href="letra/u/1"><img src={umi}  alt="Vogal U" /></a>                       
                    </li>

                    <li>               
                    <a href="letra/a/1"><img src={a_cur}  alt="Vogal A" /></a>  
                    <a href="letra/e/1"><img src={e_cur}  alt="Vogal E" /></a>  
                    <a href="letra/i/1"><img src={i_cur}  alt="Vogal I" /></a>
                    <a href="letra/o/1"><img src={o_cur}  alt="Vogal O" /></a>
                    <a href="letra/u/1"><img src={u_cur}  alt="Vogal U" /></a>   
                    </li>   

                    <li>                
                    <a href="letra/a/1"><img src={acur}  alt="Vogal A" /></a> 
                    <a href="letra/e/1"><img src={ecur}  alt="Vogal E" /></a> 
                    <a href="letra/i/1"><img src={icur}  alt="Vogal I" /></a>
                    <a href="letra/o/1"><img src={ocur}  alt="Vogal O" /></a>
                    <a href="letra/u/1"><img src={ucur}  alt="Vogal U" /></a>
                    </li>                                     
                </ul>  
                
            </Wrapper>
            <Button>Continuar</Button>
        </Container>
    </Layout>
  )
}

export default HomeVogais