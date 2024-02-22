import './App.css';

import { motion, useScroll} from "framer-motion";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


function App() {

  const { scrollYProgress } = useScroll();

  useGSAP(() => {
    gsap.from(".test-text", {
      y: () => document.querySelector(".background").offsetHeight,
      duration: 5
    })
  });


  return (
    <div className='background' id='App-Background'>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
     
      <div className='test-text' id='test-text'>
        <h1>Hi, I'm Nick!</h1>
        <p>About me text looks good in a 300 font weight with a smaller font size</p>
      </div>
     
    </div>
  );
}

export default App;
