import Abacaxi from '../Assets/a/abacaxi.png';
import Abelha from '../Assets/a/abelha.png';
import Agulha from '../Assets/a/agulha.png';
import Anel from '../Assets/a/anel.png';
import Apito from '../Assets/a/apito.png';
import Aranha from '../Assets/a/aranha.png';
import Arvore from '../Assets/a/arvore.png';
import Asas from '../Assets/a/asas.png';
import Aviao from '../Assets/a/aviao.png';
import Coelho from '../Assets/a/coelho.png';
import Foguete from '../Assets/a/foguete.png';
import Galinha from '../Assets/a/galinha.png';
import Minhoca from '../Assets/a/minhoca.png';
import Olhos from '../Assets/a/olhos.png';
import Sino from '../Assets/a/sino.png';

import NuvemAnel from '../../src/Assets/a/nuvensLetterA/anel.jpeg'; 
import NuvemAve from '../../src/Assets/a/nuvensLetterA/ave.jpeg';
import NuvemOvo from '../../src/Assets/a/nuvensLetterA/ovo.jpeg'; 
import NuvemSapo from '../../src/Assets/a/nuvensLetterA/sapo.jpeg'; 
import NuvemUrso from '../../src/Assets/a/nuvensLetterA/urso.jpeg';  
import NuvemUva from '../../src/Assets/a/nuvensLetterA/uva.jpeg';

import A from '../../src/Assets/a/letterA4/A.JPG'; 
import a_cur from '../../src/Assets/a/letterA4/a_cur.JPG'; 
import acur from '../../src/Assets/a/letterA4/acur.JPG'; 
import ami from '../../src/Assets/a/letterA4/ami.JPG';
import E from '../../src/Assets/a/letterA4/E.JPG'; 
import emi from '../../src/Assets/a/letterA4/emi.JPG'; 
import omi from '../../src/Assets/a/letterA4/omi.JPG'; 
import umi from '../../src/Assets/a/letterA4/umi.JPG'; 
import bmi from '../../src/Assets/a/letterA4/bmi.JPG'; 
import dmi from '../../src/Assets/a/letterA4/dmi.JPG';
import B from '../../src/Assets/a/letterA4/B.JPG';  
import P from '../../src/Assets/a/letterA4/P.JPG'; 
import I from '../../src/Assets/a/letterA4/I.JPG'; 



const atividades = [
    {
        audio: '/audio/Audio_A/ASOM1.mp3',
        cards: [
            {image: Abacaxi, audio: '/audio/Audio_A/abacaxi.mp3'}, {image:Sino, audio: '/audio/Audio_A/sino.mp3'}, 
            {image: Abelha, audio: '/audio/Audio_A/abelha.mp3'}, {image: Agulha, audio: '/audio/Audio_A/agulha.mp3'},
            {image:Minhoca, audio: '/audio/Audio_A/minhoca.mp3'}, {image: Anel, audio: '/audio/Audio_A/anel.mp3'}, 
            {image:Olhos, audio: '/audio/Audio_A/olhos.mp3'}, {image:Foguete, audio: '/audio/Audio_A/foguete.mp3'},
            {image: Apito, audio: '/audio/Audio_A/apito.mp3'}, {image:Aranha, audio: '/audio/Audio_A/aranha.mp3'},
            {image:Asas, audio: '/audio/Audio_A/asas.mp3'}, {image:Galinha, audio: '/audio/Audio_A/galinha.mp3'},
            {image:Coelho, audio: '/audio/Audio_A/coelho.mp3'}, {image:Aviao, audio: '/audio/Audio_A/aviao.mp3'},
            {image:Arvore, audio: '/audio/Audio_A/arvore.mp3'},      
        ]
    }, 

    {   type: 'Nuvem',
        audio: '/audio/A2.mp3',
        cards: [
            {image: NuvemAnel, audio: 'audio/abacaxi.mp3'}, {image: NuvemAve, audio: 'audio/abacaxi.mp3'},
            {image: NuvemOvo, audio: 'audio/abacaxi.mp3'}, {image: NuvemSapo, audio: 'audio/abacaxi.mp3'}, 
            {image: NuvemUrso, audio: 'audio/abacaxi.mp3'}, {image: NuvemUva, audio: 'audio/abacaxi.mp3'},       
        ]
    },

    {   type: 'TEXT',
        audio: '/audio/A2.mp3',
        cards: [
            {image:A}, {image:ami}, {image:a_cur}, {image:omi}, {image:umi}, 
            {image:bmi}, {image:dmi}, {image:A}, {image:acur}, {image:I},
            {image:ami}, {image:P}, {image:umi}, {image:emi}, {image:E},
            {image:B}, {image:ami}, {image:emi}, {image:a_cur}, {image:I},
        ]
},

    {   type: 'TEXT',
            audio: '/audio/A2.mp3',
            cards: [
                {image:A}, {image:ami}, {image:a_cur}, {image:omi}, {image:umi}, 
                {image:bmi}, {image:dmi}, {image:A}, {image:acur}, {image:I},
                {image:ami}, {image:P}, {image:umi}, {image:emi}, {image:E},
                {image:B}, {image:ami}, {image:emi}, {image:a_cur}, {image:I},
            ]
    },
      
]

export default atividades