import { Fragment } from 'react';
import './App.css';
import Home from './component/Home/Home';
import Navs from './component/Navs/Navs';
import About from './component/About/About';

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
      <About />
   </Fragment>
  );
}

export default App;
