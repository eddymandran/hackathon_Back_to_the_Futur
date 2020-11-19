import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <NavBar className='navbar' />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path="/info" component={Info} /> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
