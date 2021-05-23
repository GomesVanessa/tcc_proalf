import React from 'react';
import{Route, Switch} from 'react-router-dom';

import Login from'./Pages/Login/Login';
import Home from'./Pages/Home/Home';
import Letter from './Pages/Letter/Letter';
import HomeVogais from './Pages/HomeVogais/HomeVogais';
import EnterLetter from './Pages/EnterLetter/EnterLetter';
import CloudA from './Pages/Cloud/CloudA';
import CloudE from './Pages/Cloud/CloudE';
import CloudI from './Pages/Cloud/CloudI';
import CloudO from './Pages/Cloud/CloudO';
import CloudU from './Pages/Cloud/CloudU';
import ClickLetterA from './Pages/ClickLetter/ClickLetterA';
import ClickLetterU from './Pages/ClickLetter/ClickLetterU';

function Routes(){
    return(
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/ForgotPassword' component={Login}/>
            <Route path='/NewUser' component={Login}/>
            <Route path='/vogais' component={HomeVogais} />

            <Route path='/letra/:letter/:id' component={Letter} />     
                     
            <Route path='/cloudA' component={CloudA} />
            <Route path='/cloudE' component={CloudE} /> 
            <Route path='/cloudI' component={CloudI} />  
            <Route path='/cloudO' component={CloudO} /> 
            <Route path='/cloudU' component={CloudU} /> 

            <Route path='/clickLetterA' component={ClickLetterA} /> 
            <Route path='/clickLetterU' component={ClickLetterU} />

            <Route path='/enter' component={EnterLetter} />
            
            <Route path='/' component={Home} />
        </Switch>        
    ); 
}

export default Routes; 