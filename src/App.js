import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Info from './components/Info';
import Footer from './components/Footer';
import Targets from './components/Targets';
import './style/Global.css';


export default function App() {
  return (
    <div className='page'>
      <Router>
        <NavBar className='navbar' />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Targets' component={Targets} />
            <Route path='/info' component={Info} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
