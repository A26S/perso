import React, { useRef, useLayoutEffect, memo } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import useScroll from './hooks/useScroll';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  const root = useRef()
  const [setBodySize, height] = useScroll(root)
  const smoothscroll = useSmoothScroll(root, 0.075)

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

export default memo(App);
