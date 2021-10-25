import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Register from './components/Register'; 
import Login from './components/Login'; 
import Home from './components/Home/Home';
import ProtectedRoute from './ProtectedRoute';

const Router = ( )=> {
    return (
        <BrowserRouter>
            <ProtectedRoute exact path="/" component={Home}/>  
            {/* <Route  path="/edit/:id" component={EditUserForm}/>   */}
            <Route path="/register" component={Register}/> 
            <Route path="/login" component={Login}/> 

        </BrowserRouter>
    )
}
export default Router; 