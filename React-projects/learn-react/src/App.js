import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Signin from './components/Signin'
import Dropdown from './components/Dropdown'
import Content from './components/Content'


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [loggedIn, isLoggedIn] = useState(false)
  
  const toggle = () => {
      setIsOpen(!isOpen);
  };

  const loggedInMenu = () => {
    isLoggedIn(!loggedIn);
};
  

  useEffect( () => {
    const hideMenu = () => {
      if(window.innerWidth > 639 && isOpen){
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', hideMenu);
    return() => {
      window.removeEventListener('resize', hideMenu);
    }
  }

  )
  console.log(loggedIn);

  return (
    <Router>
      <Header toggle={toggle} loggedInMenu={loggedInMenu}/>
      <Dropdown isOpen={isOpen} toggle={toggle} loggedInMenu={loggedInMenu}/>
      <Route path="/" exact>
        {loggedIn ?
        <Signin loggedInMenu={loggedInMenu}/> :
        <Hero loggedInMenu={loggedInMenu}/> 
        }
      </Route> 
      <Route path="/projects">
        {loggedIn ?
        <Signin loggedInMenu={loggedInMenu}/> :
        <Projects /> 
        }
      </Route> 
      <Route path="/content">
        {loggedIn ?
        <Signin loggedInMenu={loggedInMenu}/> :
        <Content /> 
        }
      </Route>
    </Router>
  )
}

export default App

