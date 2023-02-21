import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import LogIn from './components/Authentication/LogIn';
import SignUp from './components/Authentication/SignUp';

function App() {
  return (
   <>
   <Route path='/'>
<Redirect to='/logIn'/>
    </Route>  
    <Route path='/logIn'>
      <LogIn/>
    </Route>
   <Route path='/signUp'>
   <SignUp/>
   </Route>
   
   </>
  );
}

export default App;
