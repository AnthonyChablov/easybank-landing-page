import {useRef, useEffect} from 'react';
import './App.css';
import useWindowSize from './hooks/useWindowSize';
import Home from './pages/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import { debounce } from 'lodash';

function App() {
  const size = useWindowSize()
  const app = useRef();
  const scrollContainer = useRef();
  const skewConfigs ={
    ease:0.1,
    current:0,
    previous : 0,
    rounded: 0
  }

 /*  useEffect(()=>{
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`
  }, []); */

  /* debounce */
  useEffect(()=>{
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
  },[size.height]);

  useEffect(()=>{
    requestAnimationFrame(()=>skewScrolling())
  },[]);

  const skewScrolling = ()=>{
    skewConfigs.current = window.scrollY;
    skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100)/100;
    
    // variables
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 0.25; // can change this value to adjust skew */
    // 
    scrollContainer.current.style.transform = `translateY(-${skewConfigs.rounded}px) skewY(${skew}deg)`;

    requestAnimationFrame(()=>skewScrolling());
  }

  return (
    <div ref={app} className='App'>
      <div ref={scrollContainer} className="scroll">
        <Navigation/>
        <Home/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
