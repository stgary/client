import React, {useEffect} from 'react';
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

  const END_POINT = process.env.END_POINT || 'https://resume-bkend.herokuapp.com/count';

  useEffect(() => {
    visits();
  })

  const visits = () => {
    axios 
      .put(END_POINT, { views: 1 })
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error.message);
        })
  }

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

