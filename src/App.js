import React, { useRef, useLayoutEffect } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import useSmoothScroll from './hooks/useSmoothScroll';
import useScroll from './hooks/useScroll';

function App() {
  const root = useRef()
  const [setBodySize, height] = useScroll(root)
  const smoothscroll = useSmoothScroll(root)

  useLayoutEffect(() => {
    setBodySize()
  }, [height])
  
  useLayoutEffect(() => {
    smoothscroll()
  }, [])
  
  console.count('render')

  return (      
    <div className="root" ref={root}>
      <Nav/>
      <Landing/>
      <About/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
