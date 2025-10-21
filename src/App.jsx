import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Education from './Education';
import Contact from './Contact';

import Employments from './Employments';

import Achievements from './Achievements';


import References from './References';
import Project from './Project';


import Skills from './Skills';

import Projects from './Projects';
import Credits from './Credits';

import Calculator from './Calculator';


function App(){
    return(
        <BrowserRouter>
        <div id="page-wrapper">
            <Header/>
            <Nav/>
            <main style={{minHeight:"100vh"}}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/employments" element={<Employments/>}/>
                <Route path="/achievements" element={<Achievements/>}/>
                <Route path="/references" element={<References/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/credit" element={<Credits/>}/>
                <Route path="/calculator" element={<Calculator/>}/>
                </Routes>
                </main>
                <Footer/>
                </div>
                </BrowserRouter>
    );
    
}
export default App;


