import Header from "./Header";
import Nav from "../Nav/Nav";
import logo from '../../Assets/icons/logo.png';
import facebook from '../../Assets/icons/facebook.png';
//import Icon from '../Icon/Icon';
 
export default{
    title: 'Proalf/Header',
    component: Header 
};

export const Header_ = () => {
    return( 
        <Header> 
            <img src={logo} alt="Logo" width="150" />
            <Nav />
            <img src={facebook} alt="Facebook" />
            
        </Header>
    )
}