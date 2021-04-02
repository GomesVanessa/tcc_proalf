import Audio from "./Audio";
import listenA1 from '../../Assets/icons/volume3.png';
import Icon from '../Icon/Icon';

export default{
    title: "Proalf/Audio",
    component: Audio,
}

export const Audio_ = () => {
    return(
        <div>
            <Audio to="./iconVolume" path={listenA1} Audio />
        </div>        
    )
}   

// const likeAudio = new Audio(like);
// const playSound = audioFile => {
//     audioFile.play();
// }
// <Button
//     onClick={() => playSound(likeAudio)}
//     variant="contained"
//     color="primary"
// >
//     <Favorite />
// </Button>