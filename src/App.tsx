import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/menu';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';

const App = ():React.ReactElement => {
  return (
    <Router>
      <Menu />
      
      <Switch>
        <Route path="/">
          <Projects />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
