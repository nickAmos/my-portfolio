import './App.css';
import memoji from '../src/memoji.jpg';
import HTML from '../src/Images/HTML.png';
import CSS from '../src/Images/CSS3.png';
import BOOTSTRAP from '../src/Images/bootstrap.png';
import FRAMERMOTION from '../src/Images/framer-motion.png';
import GSAP from '../src/Images/GSAP.svg';
import JAVASCRIPT from '../src/Images/JavaScript-logo.png';
import REACT from '../src/Images/react.png';
import SEMANTIC from '../src/Images/semantic-ui.png';
import { motion, useScroll} from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Techstack from './Components/Techstack';
import { Icon } from 'semantic-ui-react';
import { useState } from 'react';
import Projects from './Components/Projects';


gsap.registerPlugin(ScrollTrigger);



function App() {

  const { scrollYProgress } = useScroll();
  const [clipboard, setClipboard] = useState(false);
  const [copied, setcopied] = useState(false);



  function getEmail() {
    let copyEmail = document.getElementById('email').innerHTML;
    console.log(copyEmail);
    navigator.clipboard.writeText(copyEmail);
  }



  useGSAP(() => {

    gsap.from(".TopIconGithub", {
      x: -300,
      y: -90,
      rotate: -900,
      duration:3,
      ease: "bounce.out"
    })

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

    let iconTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutME",
        start: "top center",
        end: "+=100",
        scrub: true}
    })

    let fontTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".test",
        start: "bottom center",
        end: "+=750",
        scrub: true,
        //markers: true
      }
    })

    iconTL.to('.TopIconGithub',{
    opacity: 0,
  y: 100}
    )
    iconTL.to('.TopIconLinkedin',{
      opacity: 0
 ,   y: 100}
      )
      iconTL.to('.TopIconMail',{
        opacity: 0
   ,   y: 100}
        )
        iconTL.to('.TopIconX',{
          opacity: 0
     ,   y: 100}
          )

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
        //markers: true
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
       // markers: true
      },
      x: () => - document.querySelector(".aboutME").offsetWidth / 7.5,
      y: () => document.querySelector(".aboutME").offsetHeight /4 + 13 ,
      rotate: 16.6,
      scale: 0.48
    })

    gsap.from(".h1", {
      scrollTrigger: {
        trigger: '.aboutME',
        start: 'top center',
        end: '+=300',
        scrub: 1,
       // markers: true
      },
      x: () =>  document.querySelector(".aboutME").offsetWidth / 3,
      y: () => document.querySelector(".aboutME").offsetHeight/1.52,
      rotate: 11,
      scale: 1
    })

    let contactTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".contactHolder",
        start: "-350 center",
        end: "+=250",
        scrub: true,
       // markers: true
      }
    })

    contactTL.from(".contactHolder", {
      opacity: 0
    })

    contactTL.from(".IconReal", {
      y: -75,
      stagger: 0.1
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
           Currently, I work as a laboratory assistant in a pathology laboratory and for fun I enjoy <span id='boulder-txt'>bouldering <span id='boulder-emoji' className='boulder'>🧗‍♂️</span></span> 
          with friends. 
         </p>
         
        </div>
        <div className='image' id='img-container'>
          
          <img src={memoji} alt='memoji'/>  
          
        </div>
            <Icon id="broken-Mail" className='TopIconMail' inverted color='grey' name='mail' size='big'/>
            <Icon id="broken-Github" className='TopIconGithub' inverted color='grey' name='github' size='big'/>
            <Icon id="broken-Linkedin" className='TopIconLinkedin' inverted color='grey' name='linkedin' size='big'/>
            <Icon id="broken-X" className='TopIconX' inverted color='grey' name='mail' size='big'/>
        </div>

      </div>
      
      <div id='About-Me-Pin-End'>

        </div>

        <div id='contact-bar-screen'>

        <div id='contact-reveal'>

        {clipboard ? 
        <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} onClick={() => {
          setTimeout(() => {
            getEmail()
            setClipboard(!clipboard)
            setcopied(true);
          },250);
          setTimeout(() => {
            setcopied(false);
          }, 1250);
        }} id='clipboardContainer'>
          <div id='relative-container'>
          <div id='square'></div>
          <div id='email-flex'>
            <p id='email'>nick.amos2000@gmail.com</p>
            <div id='copy-outline'><Icon name='copy outline'/></div>
          </div>
          
          </div>
        </motion.div>
         : null}
         {copied ? <div id='copied-txt'>Copied!</div> : null} 

              <div className='contactHolder' id='contact-icon-holder'>
              <div onClick={() => setClipboard(!clipboard)} id='getMail'>
                <Icon className='IconReal Mail' name='mail' size='big'/>
              </div>
                <div><a href='https://github.com/nickAmos?tab=overview&from=2024-02-01&to=2024-02-28' target='_blank'><Icon className='IconReal Github' name='github' size='big'/></a></div>
                <div><a href='https://www.linkedin.com/in/nick-amos-2a2688247/' target='_blank'><Icon className='IconReal Linkedin' name='linkedin' size='big'/></a></div>
                <div><Icon className='IconReal X' name='mail' size='big'/></div>
              </div>

          </div>

        </div>
        <div>

        <Techstack />
        </div>


        <div>
          <Projects />
        </div>


     
    </div>
  );
}

export default App;
