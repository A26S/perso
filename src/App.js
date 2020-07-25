import React, { useRef, useLayoutEffect } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import { Canvas } from 'react-three-fiber';

function App() {
  console.count('render')

  const bod = useRef()
  
  useLayoutEffect(() => {
    console.log(bod.current.style)
    // bod.current.style.height = `400vh`
  }, [bod])
  
  return (
    <div className="root" ref={bod} >
      <Nav/>
      <Landing/>
      <About/>
      <Work/>
      <Footer/>
      <Canvas>
        <mesh>
          <boxBufferGeometry attach="geometry" args={[100,100,2]}/>
          <meshLambertMaterial attach="material" color={0xf95b3c}/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
