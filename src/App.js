import React from 'react';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Services from './components/Services';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className='App'>
      <Header />
      <AboutUs />
      <Services />
      <Reviews />
    </div>
  );
}

export default App;
