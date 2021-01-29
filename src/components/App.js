import React, { useEffect } from 'react';
import axios from 'axios';

import Header from './Header';
import About from './About';
import Skills from './Skills';
import Edu from './Edu';
import Projects from './Projects';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  
  return (
    <div className='top'>
      <Header />
      <About />
      <Edu />
      <Work />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

