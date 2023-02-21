import React from 'react'
import { Route } from 'react-router-dom';
import SignUp from './components/Authentication/SignUp';

function App() {
  return (
   <>
   <Route path='/signUp'>
   <SignUp/>
   </Route>
   
   </>
  );
}

export default App;
