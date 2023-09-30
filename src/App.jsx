import Abilities from './Components/Abilities';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

import {useState} from 'react';
function App() {
  const [mode, setmode] = useState(true);

  return (
    <>
  <Header set={setmode} mode={mode} />
  <Home mpde={mode}/>
  <About mode={mode}/>
  <Abilities mode={mode}/>
  <Skills mode={mode}/>
  <Projects mode={mode}/>
  <Contact mode={mode}/>
 
  <Footer/>
  
    </>
  );
}

export default App;
