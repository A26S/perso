import React from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  console.count('render')
  
  return (
    <div className="root">
      <Nav/>
      <Landing/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
