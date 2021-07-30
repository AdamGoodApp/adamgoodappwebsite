import React from 'react';
import Menu from './components/menu';
import Home from './pages/home';

const App = ():React.ReactElement => {
  return (
    <>
      <Menu />
      <Home/>
    </>
  )
}

export default App;
