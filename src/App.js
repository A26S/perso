import React, { useRef, useLayoutEffect } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import useHeight from './hooks/useHeight';

function App() {
  const root = useRef()
  const height = useHeight()

  useLayoutEffect(() => {
    document.body.style.height = `${root.current.getBoundingClientRect().height}px`
  }, [height])
  
  useLayoutEffect(() => {
    requestAnimationFrame(() => scroll())
  }, [])
  
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };
  
  const scroll = () => {
    data.current = window.scrollY
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    root.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

    
    requestAnimationFrame(() => scroll())
  }
  
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
