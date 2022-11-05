import React from 'react';

import { About, Footer, Header, Skills, Work, Education } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div classname="app">
        <Navbar />
        <Header />
        <About />
        <Education />
        <Work />
        <Skills />
        <Footer />
    </div>
  )
};

export default App;