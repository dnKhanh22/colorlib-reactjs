import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';



const App = () => {
  return(
    <div>
      <Header />
      <Home />
      <About />
    </div>
  )
}

export default App;

