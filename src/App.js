import React from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Footer from './components/Footer';

function App() {
  console.count('render')
  
  return (
    <div className="root">
      <Nav/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
