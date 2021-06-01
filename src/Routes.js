import React from 'react';
import{Route, Switch} from 'react-router-dom';

import Login from'./Pages/Login/Login';
import Home from'./Pages/Home/Home';
import Letter from './Pages/Letter/Letter';
import HomeVogais from './Pages/HomeVogais/HomeVogais';
import EnterLetterA from './Pages/EnterLetter/EnterLetterA';
import EnterLetterE from './Pages/EnterLetter/EnterLetterE';
import EnterLetterI from './Pages/EnterLetter/EnterLetterI';
import EnterLetterO from './Pages/EnterLetter/EnterLetterO';
import EnterLetterU from './Pages/EnterLetter/EnterLetterU';
import CloudA from './Pages/Cloud/CloudA';
import CloudE from './Pages/Cloud/CloudE';
import CloudI from './Pages/Cloud/CloudI';
import CloudO from './Pages/Cloud/CloudO';
import CloudU from './Pages/Cloud/CloudU';
import ClickLetterA from './Pages/ClickLetter/ClickLetterA';
import ClickLetterE from './Pages/ClickLetter/ClickLetterE';
import ClickLetterI from './Pages/ClickLetter/ClickLetterI';
import ClickLetterO from './Pages/ClickLetter/ClickLetterO';
import ClickLetterU from './Pages/ClickLetter/ClickLetterU';
import excanvas from './Pages/ClickLetter/excanvas'; 
import htmlCanvas from './Pages/ClickLetter/html5-canvas-paint-bucket';

//import test from './Pages/test';

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
            <Route path='/clickLetterE' component={ClickLetterE} />
            <Route path='/clickLetterI' component={ClickLetterI} />
            <Route path='/clickLetterO' component={ClickLetterO} />
            <Route path='/clickLetterU' component={ClickLetterU} />

            <Route path='/enterLetterA' component={EnterLetterA} />
            <Route path='/enterLetterE' component={EnterLetterE} />
            <Route path='/enterLetterI' component={EnterLetterI} />
            <Route path='/enterLetterO' component={EnterLetterO} />
            <Route path='/enterLetterU' component={EnterLetterU} />

            <Route path='/clickLetterU' component={ClickLetterU} />

            {/* <Route path='/drawletter' component={excanvas} /> */}
            <Route path='/drawletter2' component={htmlCanvas} />

            {/* <Route path='/test' component={test} /> */}
            
            <Route path='/' component={Home} />
        </Switch>        
    ); 
}

export default Routes; 