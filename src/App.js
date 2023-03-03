import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume.js';
import Services from './components/Services/services';
import Projects from './components/Projects/projects';
import Blogs from './components/Blogs/Blogs';
import Hireme from './components/Hireme/Hireme';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';



const App = () => {
  return(
    <div>
      <Header />
      <Home />
      <About />
      <Resume />
      <Services />
      <Projects />
      <Blogs />
      <Hireme />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;

