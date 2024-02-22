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
      duration: 1
    })
  });


  return (
    <div className='background' id='App-Background'>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />


     <div id='AboutME-Container'>
      <div className='test-text' id='test-text'>
        <h1>Hi, my name is Nick !</h1>
        <p>I'm a <span>JavaScript</span> / <span>React</span> developer who enjoys making interactive sites for the web.
          I started learning to code in October 2022 with Codecademy's frontend-engineer course. 
           Currently, I work as a laboratory assistant in a pathology lab. For fun I enjoy bloudering 
           and playing sports with friends. 
        </p>
        <h2>Contact me</h2>
      </div>
      <div id='img-container'>

      </div>
      </div>


     
    </div>
  );
}

export default App;
