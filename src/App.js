import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from "./components/Home"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import ContactInfo from "./components/ContactInfo"
import NavBar from "./components/Navbar"
import Background from './components/Background';

function App(){
    return(
        <BrowserRouter>
        <NavBar />
        <Background />
            <Switch>
                <Route component={Home} path='/' exact />
                <Route component={Resume} path='/resume' />
                <Route component={Projects} path='/project' />
                <Route component={ContactInfo} path='/contact' />
            </Switch>
        </BrowserRouter>

    )

   
}
export default App;


