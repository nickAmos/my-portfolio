import '../src/Styling/App.css';
import memoji from '../src/memoji.jpg';
import altmemoji1 from '../src/Images/IMG_5798.jpg';
import altmemoji2 from '../src/Images/IMG_5800.jpg';
import altmemoji3 from '../src/Images/IMG_5801.jpg';
import altmemoji4 from '../src/Images/IMG_5802.jpg';
import altmemoji5 from '../src/Images/IMG_5803.jpg';
import ninja from '../src/Images/ninja-star-svgrepo-com.svg';
import { motion, useScroll} from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Techstack from './Components/Techstack';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { Icon } from 'semantic-ui-react';
import { useState } from 'react';


gsap.registerPlugin(ScrollTrigger);



function App() {


  const { scrollYProgress } = useScroll();
  const [profile, setProfile] = useState(memoji);
  const [profileIndex, setProfileIndex] = useState(0);

 
  const memojiArr = [memoji, altmemoji1, altmemoji2, altmemoji3, altmemoji4, altmemoji5];

  const newProfile = (newIndex) => {
    setProfile(memojiArr[newIndex]);
  }

  const randomProfile = (currentIndex) => {
    let num;
    while (true) {
      num = Math.floor(Math.random() * 6);
      console.log(`num: ${num}`);
      if (num !== currentIndex) {
        setProfileIndex(num);
        newProfile(profileIndex);
        return;
      }
    }

  }

  useGSAP(() => {


    let scroll = gsap.timeline({
      duration: 1
    });

    scroll.from(".scroll-txt", {
      opacity:0,
      y: -30,
      duration:1,
      ease: 'expo.out'
    });

    scroll.from(".scroll-icon", {
      opacity: 0,
      y: -10,
      duration: 0.5
    }, '-=0.5');

    let scrollExit = gsap.timeline({
      scrollTrigger: {
        trigger: 'background',
        start: "10 top",
        end: '20 top',
  
      }
    });

    scrollExit.to(".scroll-instruction-container", {
      opacity:0
    })






    let intro = gsap.timeline({
      scrollTrigger: {
        trigger: '.background',
        start: "50 top",
        end: "+=150",
        onEnter: () => {
          setTimeout(() => {
            randomProfile(5);
            
            console.log('ran')
          },3000)
        
        }

      },
      ease: 'power3'
    });

   

    intro.from(".h1", {
      opacity: 0,
      duration: 1,
      scale: 0,
      x: 200,
      ease: "expo.out"
    })
    intro.from(".ninja-star", {
      x: -1000,
      y: -400,
      rotate: -680,
      ease: "expo",
      opacity: 0
    })

    intro.from(".h1-copy", {
      opacity: 0,
      
    })

    intro.to(".h1", {
      opacity: 0
    })

  

    intro.from('.p', {
      opacity: 0,
      duration: 1
    })

    intro.from('.p', {
      width: 1200,
      duration: 2,
      ease: 'power3'
    }, '-=0.5')

    intro.from('.image', {
      x: 400,
      opacity:0,
      duration: 2,
      ease: 'power3'
    }, '-=2');

    intro.to(".ninja-star", {
      opacity:0
    })

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutME",
        start: "center center",
        end: "+=1000",
        scrub: true,

        pin: true,
 
      }
    })

    let fontTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".test",
        start: "500 center",
        end: "+=750",
        scrub: true,
      
      }
    })

    tl.to(".aboutME",{
    x: 0});   


    fontTL.to(".javaScript", {
      fontWeight: 600,
      //borderBottom: "1px solid #f7df1e" 
        })

    fontTL.to(".react", {
        fontWeight: 600,
       // borderBottom: "1px solid #61DBFB" 
        })
    fontTL.to(".boulder", {
        opacity:100,
        y:7.5
        })

           

  });
  


  return (
    <div className='background' id='App-Background'>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div id='top-screen-box'> 
    <div id='scroll-instruction-container' className='scroll-instruction-container'>

        <div id='scroll-icon' className='scroll-icon'><Icon size='big' name='angle double down' /></div>
        <div id='scroll-txt' className='scroll-txt'>Scroll to begin</div>
        <div id='scroll-icon' className='scroll-icon'><Icon size='big' name='angle double down' /></div>
        
      </div>


      <div className='aboutME' id='AboutME-Container'>
        <div className='test' id='test-text'>

         <h1 className='h1'>Hi, my name is <span>Nick</span> !</h1>
         <p className='p'>I'm a <span className='javaScript'>JavaScript</span> / <span className='react'>React</span> developer who enjoys making interactive sites for the web.
          I began my coding journey in October 2022 with Codecademy's frontend-engineer course. 
           Currently, I work as a laboratory assistant in a pathology laboratory and for fun I enjoy <span id='boulder-txt'>bouldering <span id='boulder-emoji' className='boulder'>🧗‍♂️</span></span> 
          with friends. 
         </p>

         <div className='ninja-star' id='ninja-star'><img id='ninja-svg' src={ninja} alt='ninja-star'/></div>
        <div id='copy-title' className='h1-copy'><h1>Hi, my name is <span>Nick</span> !</h1></div>
         
        </div>
        <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }}
         onClick={() => randomProfile(profileIndex)} className='image' id='img-container'>
          
          <img src={profile} alt='memoji'/>  
          
        </motion.div>
      </div>

      </div>
      
      <div id='About-Me-Pin-End'>

        </div>

        
        <div>

        <Techstack />
        </div>

        <div id='Tech-Project-Spacer'></div>


        <div>
          <Projects />
        </div>

        <Contact />


     
    </div>
  );
}

export default App;


/* <div id='contact-bar-screen'>

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
        */