import React, { useRef } from 'react';
import Menu from './components/menu';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';

const App = ():React.ReactElement => {
  const homeRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  return (
    <>
      <Menu homeRef={homeRef}  projectsRef={projectsRef} contactRef={contactRef} />
      <Home refProp={homeRef} />
      <Projects refProp={projectsRef} />
      <Contact refProp={contactRef} />
    </>
  )
}

export default App;
