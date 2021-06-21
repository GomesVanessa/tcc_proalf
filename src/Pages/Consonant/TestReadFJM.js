// import React,{useState} from 'react';
// import styled from "styled-components";
// import {Link} from 'react-router-dom';
// import Layout from '../../components/Layout/Layout';
// import Container from '../../components/Container/Container';
// import Button from '../../components/Button/Button';
// import Card from '../../components/Card/Card';

// import ReactAudioPlayer from 'react-audio-player';

// const Wrapper = styled.div`
//     display: grid;
//     grid-template-columns: repeat(7, 130px);
//     grid-column-gap: .1em;
//     grid-row-gap: .1em;
//     font-size: 2.2em;    
//     justify-content: center;

//     input{
//         width: 90px;
//         height: 50px;
//         align-items: center;
//         border: none;
//         text-transform: uppercase;
//         text-align: center;
//     } 
//     .3letter{
//         width: 50px;
//     }
// `; 

// const CardClick = styled(Card)`
//     border-color: #A7BBC7;
//     cursor: pointer; 
//         &:hover {
//             box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
//             transform: translate(0, -5px);  
//         } 
// `;

// const AudioInstrucao = styled(ReactAudioPlayer)`
//     margin: 30px;
// `;


// function TestFJM(){ 
//     const [acertos, setAcertos] = useState(0);
//     const [erros, setErros] = useState(0);

//     const [letter0, setLetter0] = useState('');
//     const [color0, setColor0] = useState('#000');
//     const [answer0, setAnswer0] = useState(false);
//     const [letter1, setLetter1] = useState('');
//     const [color1, setColor1] = useState('#000');
//     const [answer1, setAnswer1] = useState(false); 
//     const [letter2, setLetter2] = useState('');
//     const [color2, setColor2] = useState('#000');
//     const [answer2, setAnswer2] = useState(false); 
//     const [letter3, setLetter3] = useState('');
//     const [color3, setColor3] = useState('#000');
//     const [answer3, setAnswer3] = useState(false); 
//     const [letter4, setLetter4] = useState('');
//     const [color4, setColor4] = useState('#000');
//     const [answer4, setAnswer4] = useState(false); 
//     const [letter5, setLetter5] = useState('');
//     const [color5, setColor5] = useState('#000');
//     const [answer5, setAnswer5] = useState(false); 
//     const [letter6, setLetter6] = useState('');
//     const [color6, setColor6] = useState('#000');
//     const [answer6, setAnswer6] = useState(false); 
//     const [letter7, setLetter7] = useState('');
//     const [color7, setColor7] = useState('#000');
//     const [answer7, setAnswer7] = useState(false); 
//     const [letter8, setLetter8] = useState('');
//     const [color8, setColor8] = useState('#000');
//     const [answer8, setAnswer8] = useState(false); 
//     const [letter9, setLetter9] = useState('');
//     const [color9, setColor9] = useState('#000');
//     const [answer9, setAnswer9] = useState(false); 
//     const [letter10, setLetter10] = useState('');
//     const [color10, setColor10] = useState('#000');
//     const [answer10, setAnswer10] = useState(false); 
//     const [letter11, setLetter11] = useState('');
//     const [color11, setColor11] = useState('#000');
//     const [answer11, setAnswer11] = useState(false); 
//     const [letter12, setLetter12] = useState('');
//     const [color12, setColor12] = useState('#000');
//     const [answer12, setAnswer12] = useState(false); 
//     const [letter13, setLetter13] = useState('');
//     const [color13, setColor13] = useState('#000');
//     const [answer13, setAnswer13] = useState(false); 
//     const [letter14, setLetter14] = useState('');
//     const [color14, setColor14] = useState('#000');
//     const [answer14, setAnswer14] = useState(false); 
//     const [letter15, setLetter15] = useState('');
//     const [color15, setColor15] = useState('#000');
//     const [answer15, setAnswer15] = useState(false); 
//     const [letter16, setLetter16] = useState('');
//     const [color16, setColor16] = useState('#000');
//     const [answer16, setAnswer16] = useState(false); 
//     const [letter17, setLetter17] = useState('');
//     const [color17, setColor17] = useState('#000');
//     const [answer17, setAnswer17] = useState(false); 
    
//     React.useEffect(() => {
//         setColor0(() => answer0  ? '#0F0': '#F00');
//         setColor1(() => answer1  ? '#0F0': '#F00');
//         setColor2(() => answer2  ? '#0F0': '#F00');
//         setColor3(() => answer3  ? '#0F0': '#F00');
//         setColor4(() => answer4  ? '#0F0': '#F00');
//         setColor5(() => answer5  ? '#0F0': '#F00');
//         setColor6(() => answer6  ? '#0F0': '#F00');
//         setColor7(() => answer7  ? '#0F0': '#F00');
//         setColor8(() => answer8  ? '#0F0': '#F00');
//         setColor9(() => answer9  ? '#0F0': '#F00');
//         setColor10(() => answer10  ? '#0F0': '#F00');
//         setColor11(() => answer11  ? '#0F0': '#F00');
//         setColor12(() => answer12  ? '#0F0': '#F00');
//         setColor13(() => answer13  ? '#0F0': '#F00');
//         setColor14(() => answer14  ? '#0F0': '#F00');
//         setColor15(() => answer15  ? '#0F0': '#F00');
//         setColor16(() => answer16  ? '#0F0': '#F00');
//         setColor17(() => answer17  ? '#0F0': '#F00');
//     }, [answer0, answer1, answer2, answer3, answer4,  
//         answer5, answer6, answer7, answer8, answer9, 
//         answer10, answer11, answer12, answer13, answer14,
//         answer15, answer16, answer17]);

//     function validaLetter0({target}){
//         setLetter0(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'FA') {
//             setAnswer0(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer0(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter1({target}){
//         setLetter1(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'FE') {
//             setAnswer1(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer1(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter2({target}){
//         setLetter2(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'FI') {
//             setAnswer2(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer2(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter3({target}){
//         setLetter3(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'FO') {
//             setAnswer3(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer3(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter4({target}){
//         setLetter4(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'FU') {
//             setAnswer4(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer4(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter5({target}){
//         setLetter5(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'FÃO') {
//             setAnswer5(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer5(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter6({target}){
//         setLetter6(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'JA') {
//             setAnswer6(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer6(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter7({target}){
//         setLetter7(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'JE') {
//             setAnswer7(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer7(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter8({target}){
//         setLetter8(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'JI') {
//             setAnswer8(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer8(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter9({target}){
//         setLetter9(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'JO') {
//             setAnswer9(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer9(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter10({target}){
//         setLetter10(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'JU') {
//             setAnswer10(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer10(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter11({target}){
//         setLetter11(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'JÃO') {
//             setAnswer11(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer11(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter12({target}){
//         setLetter12(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'MA') {
//             setAnswer12(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer12(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter13({target}){
//         setLetter13(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'ME') {
//             setAnswer13(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer13(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter14({target}){
//         setLetter14(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'MI') {
//             setAnswer14(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer14(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter15({target}){
//         setLetter15(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'MO') {
//             setAnswer15(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer15(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter16({target}){
//         setLetter16(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'MU') {
//             setAnswer16(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer16(false);
//             setErros(erros+1);
//         }
//     }
//     function validaLetter17({target}){
//         setLetter17(target.value)
//         const pressLetter = target.value.toUpperCase();
        
//         if(pressLetter === 'MÃO') {
//             setAnswer17(true);
//             setAcertos(acertos+1);
            
//         } else {
//             setAnswer17(false);
//             setErros(erros+1);
//         }
//     }
        
//     function contAcertos(){
//         console.log('Você acertou ' + acertos);
//     }

//     function contErros(){
//         alert('Você errou ' + erros);
//     }
   
//     return(
//         <Layout>
//             <Container>
//                 <AudioInstrucao controls />
//                     <Wrapper>
                        
//                         <div>
//                             <CardClick>FACA</CardClick>
//                             <CardClick>FALA</CardClick>
//                             <CardClick>FAMA</CardClick>
//                             <CardClick>FEIA</CardClick>
//                             <CardClick>FEIO</CardClick>
//                             <CardClick>FEIJÃO</CardClick>
//                         </div>
//                         <div>
//                             <CardClick>FOME</CardClick>
//                             <CardClick>FOFÃO</CardClick>
//                             <CardClick>JACA</CardClick>
//                             <CardClick>JIJI</CardClick>
//                             <CardClick>JUJU</CardClick>
//                             <CardClick>JUCA</CardClick>
//                         </div>
//                         <div>
//                             <CardClick>JOÃO</CardClick>
//                             <CardClick>MALA</CardClick>
//                             <CardClick>MEU</CardClick>
//                             <CardClick>MIAU</CardClick>
//                             <CardClick>MEU</CardClick>
//                             <CardClick>MIAU</CardClick>
//                         </div>
//                         <div>
//                             <CardClick>MOFA</CardClick>
//                             <CardClick>MOFO</CardClick>
//                             <CardClick>MÃO</CardClick>
//                             <CardClick>MAMÃO</CardClick>
//                         </div>               
//                     </Wrapper>
                    
                                         
//             </Container>
//             <Link to=""><Button >Continuar</Button></Link>
//         </Layout>    
//     );
// }

// export default TestFJM;