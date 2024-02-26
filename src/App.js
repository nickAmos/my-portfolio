import './App.css';
import memoji from '../src/memoji.jpg';
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
        //markers: true,
        pin: true,
 
      }
    })

    let fontTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".test",
        start: "bottom center",
        end: "+=750",
        scrub: true,
        markers: true
      }
    })

    tl.to(".aboutME",{
    x: 0});   


    fontTL.to(".javaScript", {
      color: "#f7df1e",
      borderBottom: "1px solid #f7df1e" 
        })

    
        fontTL.to(".react", {
          color: "#61DBFB",
          borderBottom: "1px solid #61DBFB" 
            })

            fontTL.to(".contact", {
              y: -50
            })

            fontTL.to(".laboratory", {
              opacity:100,
              y:7.5,
              rotate:90
             })

            fontTL.to(".boulder", {
             opacity:100,
             y:7.5
            })

           

     gsap.from(".image", {
      scrollTrigger: {
        trigger: '.aboutME',
        start: 'top center',
        end: '+=300',
        scrub: 1,
        markers: true
      },
      x: () => - document.querySelector(".aboutME").offsetWidth + 210,
      y: () => document.querySelector(".aboutME").offsetHeight -290,
      scale: 0.5
    })

    gsap.from(".p", {
      scrollTrigger: {
        trigger: '.aboutME',
        start: 'top center',
        end: '+=300',
        scrub: 1,
        markers: true
      },
      x: () => - document.querySelector(".aboutME").offsetWidth / 8,
      y: () => document.querySelector(".aboutME").offsetHeight /4 + 20 ,
      rotate: 17,
      scale: 0.5
    })

    gsap.from(".h1", {
      scrollTrigger: {
        trigger: '.aboutME',
        start: 'top center',
        end: '+=300',
        scrub: 1,
        markers: true
      },
      x: () =>  document.querySelector(".aboutME").offsetWidth / 3,
      y: () => document.querySelector(".aboutME").offsetHeight/1.56,
      rotate: 13,
      scale: 1
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
         <h1 className='h1'>Hi, my name is Nick !</h1>
         <p className='p'>I'm a <span className='javaScript'>JavaScript</span> / <span className='react'>React</span> developer who enjoys making interactive sites for the web.
          I began my coding journey in October 2022 with Codecademy's frontend-engineer course. 
           Currently, I work as a laboratory assistant in a pathology <span id='laboratory-txt'>laboratory <span className='laboratory' id='laboratory-emoji'>🧪</span><span id='skills-txt'>My skills</span></span>and for fun I enjoy <span id='boulder-txt'>bouldering <span id='boulder-emoji' className='boulder'>🧗‍♂️</span></span> 
          with friends. 
         </p>
         
        </div>
        <div className='image' id='img-container'>
          <h2 className='contact'>Contact me</h2>
          <img src={memoji} alt='brandlogo'/>  
          
        </div>
        </div>

      </div>


     
    </div>
  );
}

export default App;
