import React, { useRef, useLayoutEffect } from 'react';
import lerp from 'lerp';
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
    requestAnimationFrame(scroll)
  }, [])
  
  const data = {
    current: 0,
    previous: 0,  
    ease: 0.075
  }
  
  const scroll = () => {
    data.current = window.scrollY
    data.previous = lerp(data.previous, data.current, data.ease);

    root.current.style.transform = `translate3d(0, -${data.previous}px, 0)`;

    requestAnimationFrame(scroll)
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
