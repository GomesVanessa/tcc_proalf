import Abacaxi from '../Assets/a/abacaxi.png';
import Abelha from '../Assets/a/abelha.png';
import Anel from '../Assets/a/anel.png';
import Apito from '../Assets/a/apito.png';
import Aranha from '../Assets/a/aranha.png';
import Arvore from '../Assets/a/arvore.png';
import Aviao from '../Assets/a/aviao.png';
import Coelho from '../Assets/a/coelho.png';
import Foguete from '../Assets/a/foguete.png';
import Galinha from '../Assets/a/galinha.png';
import Olhos from '../Assets/a/olhos.png';
import Sino from '../Assets/a/sino.png';


const atividades = [
    {  
        audio: '/audio/Audio_A/ASOM1.mp3',
        cards: [
            {image: Abacaxi, active:true, audio: '/audio/Audio_A/abacaxi.mp3'}, {image:Sino, audio: '/audio/Audio_A/sino.mp3'}, 
            {image: Abelha, audio: '/audio/Audio_A/abelha.mp3'}, {image: Anel, audio: '/audio/Audio_A/anel.mp3'}, 
            {image:Olhos, audio: '/audio/Audio_A/olhos.mp3'}, {image: Apito, audio: '/audio/Audio_A/apito.mp3'},
            {image:Foguete, audio: '/audio/Audio_A/foguete.mp3'}, {image:Aranha, audio: '/audio/Audio_A/aranha.mp3'},
            {image:Arvore, audio: '/audio/Audio_A/arvore.mp3'}, {image:Coelho, audio: '/audio/Audio_A/coelho.mp3'},
            {image:Aviao, audio: '/audio/Audio_A/aviao.mp3'}, {image:Galinha, audio: '/audio/Audio_A/galinha.mp3'},       
        ]
    
    }, 
 
    // {   type: 'TEXT',
    //         audio: '/audio/Audio_A/tela5-.mp3',
    //         cards: [{representacao}],
    //         cards: [
    //             {image:A}, {image:ami}, {image:a_cur}, {image:omi},
    //             {image:bmi}, {image:dmi}, {image:A}, {image:a_cur}, 
    //             {image:ami}, {image:P}, {image:umi}, {image:acur},  
    //         ]
    // },      
]

export default atividades