import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Info from './components/Info';

import AboutUs from './components/AboutUs';


export default function App() {
  return (
    <div className="page">
      
            <Router>
              <main>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/aboutus" component={AboutUs} />
                  <Route path="/info" component={Info} />
                  
                </Switch>
              </main>
              {/* <Footer /> */}
            </Router>
          
       
     
    </div>
  );
}
