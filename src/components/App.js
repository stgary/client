import React from 'react';

import Header from './Header';
import About from './About';
import Skills from './Skills';
import Edu from './Edu';
import Projects from './Projects';
import Work from './Work';
import Contact from './Contact';
import Nav from './Nav';

export default function App() {
  return (
    <div className='top'>
      <Nav />
      <Header />
      <About />
      <Edu />
      <Work />
      <Projects />
      <Skills />
      <Contact />
      <div className='spacer'></div>
    </div>
  );
}

