import React from 'react';
import{Route, Switch} from 'react-router-dom';
import Home from'./Pages/Home/Home';
import Login from'./Pages/Login/Login';
import NewUser from './Pages/Login/NewUser';
import ForgotPassword from './Pages/Login/ForgotPassword';
import HomeVogais from './Pages/HomeVogais/HomeVogais';
import ClickImageA from './Pages/ClickImage/ClickImageA';
import ClickImageE from './Pages/ClickImage/ClickImageE';
import ClickImageI from './Pages/ClickImage/ClickImageI';
import ClickImageO from './Pages/ClickImage/ClickImageO';
import ClickImageU from './Pages/ClickImage/CliqueImageU';
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
import TypeLetterA from './Pages/TypeLetter/TypeLetterA';
import TypeLetterE from './Pages/TypeLetter/TypeLetterE';
import TypeLetterI from './Pages/TypeLetter/TypeLetterI';
import TypeLetterO from './Pages/TypeLetter/TypeLetterO';
import TypeLetterU from './Pages/TypeLetter/TypeLetterU';
import TestVowels from './Pages/TestVowels/TestVowels';
import ClickImageAO from './Pages/ClickImage/ClickImageAO';
import TypeLetterAO from './Pages/TypeLetter/TypeLetterAO';

import HomeConsonants from './Pages/Consonant/HomeConsonant';
import fMenu from './Pages/Consonant/fMenu';
import jMenu from './Pages/Consonant/jMenu';
import mMenu from './Pages/Consonant/mMenu';
import nMenu from './Pages/Consonant/nMenu';
import ClickImageF from './Pages/Consonant/ClickImage/ClickImageF';
import ReadF from './Pages/Consonant/Read/ReadF';
import TypeConsonantsF from './Pages/Consonant/TypeConsonants/TypeConsonantsF';
import ClickWordsF from './Pages/Consonant/ClickWords/ClickWordsF';
import ClickWordsJ from './Pages/Consonant/ClickWords/ClickWordsJ';
import ClickImageJ from './Pages/Consonant/ClickImage/ClickImageJ';
import ReadJ from './Pages/Consonant/Read/ReadJ';
import TypeConsonantsJ from './Pages/Consonant/TypeConsonants/TypeConsonantsJ';



function Routes(){
    return(
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/forgotPassword' component={Login}/>
            <Route path='/newUser' component={NewUser}/>
            <Route path='/forgotPassword' component={ForgotPassword}/>
            <Route path='/vogais' component={HomeVogais} />

            <Route path='/clickImageA' component={ClickImageA} />
            <Route path='/clickImageE' component={ClickImageE} />
            <Route path='/clickImageI' component={ClickImageI} />
            <Route path='/clickImageO' component={ClickImageO} />
            <Route path='/clickImageU' component={ClickImageU} /> 
            <Route path='/clickImageAO' component={ClickImageAO} />
            <Route path='/clickImageF' component={ClickImageF} />
            <Route path='/clickImageJ' component={ClickImageJ} />
                     
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
            <Route path='/clickWordsF' component={ClickWordsF} />
            <Route path='/clickWordsJ' component={ClickWordsJ} />

            <Route path='/typeLetterA' component={TypeLetterA} />
            <Route path='/typeLetterE' component={TypeLetterE} />
            <Route path='/typeLetterI' component={TypeLetterI} />
            <Route path='/typeLetterO' component={TypeLetterO} />
            <Route path='/typeLetterU' component={TypeLetterU} />
            <Route path='/typeLetterAO' component={TypeLetterAO} />

            <Route path='/typeConsonantsF' component={TypeConsonantsF} />
            <Route path='/typeConsonantsJ' component={TypeConsonantsJ} />

            <Route path='/testVowels' component={TestVowels} />
                       
            <Route path='/consonants' component={HomeConsonants} />
            <Route path='/fMenu' component={fMenu} />
            <Route path='/jMenu' component={jMenu} />
            <Route path='/mMenu' component={mMenu} />
            <Route path='/nMenu' component={nMenu} />
            
            <Route path='/readF' component={ReadF} />
            <Route path='/readJ' component={ReadJ} />

            <Route path='/' component={Home} />
        </Switch>        
    ); 
}

export default Routes; 