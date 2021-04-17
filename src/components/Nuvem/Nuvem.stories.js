import Nuvem from './Nuvem';

import anel from '../../Assets/iconspages/anel.jpeg';
import ave from '../../Assets/iconspages/ave.jpeg';
import sapo from '../../Assets/iconspages/sapo.jpeg';
import urso from '../../Assets/iconspages/urso.jpeg';
import uva from '../../Assets/iconspages/uva.jpeg';



export default { 
    title: "Proalf/Nuvem", 
    component: Nuvem,
}; 

  
export const Nuvem_ = () => {
    return(
        <div>
            <Nuvem to="./anel" path={anel} alt="anel" width="50"/>
            <Nuvem to="./nuvem" path={ave} alt="nuvem" width="50"/>
            <Nuvem to="./sapo" path={sapo} alt="sapo" width="50"/>
            <Nuvem to="./urso" path={urso} alt="urso" width="50"/>
            <Nuvem to="./uva" path={uva} alt="uva" width="50"/>
        </div> 
    )
}


  