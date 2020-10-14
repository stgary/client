import React from 'react';

import Header from './Header';
import About from './About';
import Skills from './Skills';
import Edu from './Edu';
import Projects from './Projects';

export default function App() {
  return (
    <div className='top'>
      <Header />
      <About />
      <Skills />
      <Edu />
      <Projects />
    </div>
  );
}

