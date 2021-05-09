import React from 'react';
import{Route, Switch} from 'react-router-dom';

import Login from'./Pages/Login/Login';
import Home from'./Pages/Home/Home';
import Letter from './Pages/Letter/Letter';
import Nuvem from './components/Nuvem/Nuvem';
import HomeVogais from './Pages/HomeVogais/HomeVogais';
import EnterLetter from './Pages/EnterLetter/EnterLetter';

function Routes(){
    return(
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/letra/:letter/:id' component={Letter} />     
            {/* <Route path='/nuvem/:letter/:id' component={Cloud} />    */}
            <Route path='/nuvem' component={Nuvem} /> 
            <Route path='/vogais' component={HomeVogais} />
            <Route path='/enter' component={EnterLetter} />
            <Route path='/' component={Home} />
        </Switch>        
    ); 
}

export default Routes; 