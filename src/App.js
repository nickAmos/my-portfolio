import './App.css';

import { motion, useScroll} from "framer-motion";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const { scrollYProgress } = useScroll();

  useGSAP(() => {

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutME",
        start: "center center",
        end: "+=1000",
        scrub: true,
        markers: true,
        pin: true
      }
    })

    tl.to(".aboutME",{
    x: 0});   

    gsap.from(".test", {
      scrollTrigger: {
        trigger: '.test',
        start: 'top center',
        end: '+=600',
        scrub: 1,
        markers: true
      },
      opacity: 0,
      x: 200
    })

  });
  


  return (
    <div className='background' id='App-Background'>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div id='top-screen-box'> 


      <div className='aboutME' id='AboutME-Container'>
        <div className='test' id='test-text'>
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


     
    </div>
  );
}

export default App;
