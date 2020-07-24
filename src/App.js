import React, { useRef, useLayoutEffect } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  console.count('render')

  const bod = useRef()
  
  useLayoutEffect(() => {
    console.log(bod.current.style)
    // bod.current.style.height = `400vh`
  }, [bod])

  const onscroll = e => {
    console.log(e.target)
  }
  
  return (
    <div className="root" ref={bod} onScroll={onscroll}>
      <Nav/>
      <Landing/>
      <About/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
