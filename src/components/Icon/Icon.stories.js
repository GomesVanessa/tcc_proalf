import Icon from "./Icon";
import login from '../../Assets/icons/login.png';
import facebook from '../../Assets/icons/facebook.png';

export default{ 
    title: "Proalf/Icons",
    component: Icon, 
}

export const IconFacebook = () => {
    return(
        <div>
            <Icon to="./facebook" path={facebook} alt="facebook" />
        </div> 
    )
}

export const IconLogin = () => {
    return(
        <div>
            <Icon to="./login" path={login} alt="Login" />
        </div> 
    )
}

