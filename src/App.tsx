import React from 'react';
import Menu from './components/menu';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';

const App = ():React.ReactElement => {
  return (
    <>
      <Menu />
      <Home />
      <Projects />
      <Contact/>
    </>
  )
}

export default App;
