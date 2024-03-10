import { useGSAP } from "@gsap/react"
import { useState } from "react";
import { gsap } from "gsap";
import { motion} from "framer-motion";
import HTML from '../Images/HTML.png';
import CSS from '../Images/CSS3.png';
import BOOTSTRAP from '../Images/axios.png';
import FRAMERMOTION from '../Images/framer-motion.png';
import GSAP from '../Images/GSAP.svg';
import JAVASCRIPT from '../Images/JavaScript-logo.png';
import REACT from '../Images/react.png';
import SEMANTIC from '../Images/semantic-ui.png';


export default function Techstack() {


    const [Html, setHtml] = useState(false);
    const [Css, setCss] = useState(false);
    const [JavaScript, setJavaScript] = useState(false);
    const [Reacttxt, setReacttxt] = useState(false);
    const [Gsap, setGsap] = useState(false);
    const [FramerMotion, setFramerMotion] = useState(false);
    const [Bootstrap, setBootstrap] = useState(false);
    const [Semantic, setSemantic] = useState(false);


    useGSAP(() => {

    gsap.from(".my-skills-txt", {
        scrollTrigger: {
            trigger: ".my-skills-txt",
            start: "top center",
            end: "bottom center",
            scrub:true,
            //markers: true
        },
        y: 60,
        opacity: 0
    })
     
    gsap.to(".pinned-skills-screen", {
        scrollTrigger: {
            trigger: ".pinned-skills-screen",
            start: "center center",
            end: "+=1000",
            scrub: true,
            pin: true,
      
        },
         x: 0
     })

     let techTL = gsap.timeline({
        
     });

        techTL.from(".map-technologoes", {
            scrollTrigger: {
                trigger: ".pinned-skills-screen",
                start: "top center",
                end: "+=1000",
                scrub: true,
        
            },
            height:0,
        })

         techTL.from(".img-container-tech", {
            scrollTrigger: {
                trigger: ".pinned-skills-screen",
                start: "center center",
                end: "+=630",
                scrub: true,
                //markers: true
         },
         y: 200,
        opacity:0,
    stagger: 0.25});

 
    });


 
  setTimeout(() => {
    let HTMLtxt = document.getElementById('HTML');
    if (HTMLtxt) {
    HTMLtxt.addEventListener("mouseenter", () => {
      setHtml(true);
      });
    HTMLtxt.addEventListener("mouseleave", () => {
      setHtml(false);
        });
  }; }, 500 );

  setTimeout(() => {
    let CSStxt = document.getElementById('CSS');
    if (CSStxt) {
    CSStxt.addEventListener("mouseenter", () => {
      setCss(true);
      });
    CSStxt.addEventListener("mouseleave", () => {
      setCss(false);
        });
  }; }, 500 );

  setTimeout(() => {
    let JavaScripttxt = document.getElementById('JAVASCRIPT');
    if (JavaScripttxt) {
    JavaScripttxt.addEventListener("mouseenter", () => {
      setJavaScript(true);
      });
    JavaScripttxt.addEventListener("mouseleave", () => {
      setJavaScript(false);
        });
  }; }, 500 );

  setTimeout(() => {
    let REACTtxt = document.getElementById('REACT');
    if (REACTtxt) {
    REACTtxt.addEventListener("mouseenter", () => {
      setReacttxt(true);
      });
    REACTtxt.addEventListener("mouseleave", () => {
      setReacttxt(false);
        });
  }; }, 500 );

  setTimeout(() => {
    let GSAPtxt = document.getElementById('GSAP');
    if (GSAPtxt) {
    GSAPtxt.addEventListener("mouseenter", () => {
      setGsap(true);
      });
    GSAPtxt.addEventListener("mouseleave", () => {
      setGsap(false);
        });
  }; }, 500 );

  setTimeout(() => {
    let FRAMERtxt = document.getElementById('FRAMERMOTION');
    if (FRAMERtxt) {
    FRAMERtxt.addEventListener("mouseenter", () => {
      setFramerMotion(true);
      });
    FRAMERtxt.addEventListener("mouseleave", () => {
      setFramerMotion(false);
        });
  }; }, 500 );

  setTimeout(() => {
    let BOOTSTRAPtxt = document.getElementById('BOOTSTRAP');
    if (BOOTSTRAPtxt) {
    BOOTSTRAPtxt.addEventListener("mouseenter", () => {
      setBootstrap(true);
      });
    BOOTSTRAPtxt.addEventListener("mouseleave", () => {
      setBootstrap(false);
        });
  }; }, 500 );

  setTimeout(() => {
    let SEMANTICtxt = document.getElementById('SEMANTIC');
    if (SEMANTICtxt) {
    SEMANTICtxt.addEventListener("mouseenter", () => {
      setSemantic(true);
      });
    SEMANTICtxt.addEventListener("mouseleave", () => {
      setSemantic(false);
        });
  }; }, 500 );

    return(
        <div id='mySkillsScreen'>
        <div id='hundredvhvw'>

            <div id='pinned-skills-screen' className='pinned-skills-screen'>
              <div id='my-skills-txt' className="my-skills-txt">
                <h1>My Technologies</h1>
                </div>
              <div id='map-technologoes' className='map-technologoes'>
                
                <div id='languages-container'>
                  <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} className="img-container-tech" id='img-container-tech'><a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' target='_blank'><img id='HTML' src={HTML} /></a>
                  {Html ? <div id='absoluteName'><p>HTML</p></div> : null}
                  </motion.div>
                  <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} className="img-container-tech" id='img-container-tech'><a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'><img id='CSS' src={CSS} /></a>
                  {Css ? <div id='absoluteName'><p>CSS</p></div> : null}
                  </motion.div>
                  <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} className="img-container-tech" id='img-container-tech'><a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics' target='_blank'><img id='JAVASCRIPT' src={JAVASCRIPT} /></a>
                  {JavaScript ? <div id='absoluteName'><p>JavaScript</p></div> : null}
                  </motion.div>
                  <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} className="img-container-tech" id='img-container-tech'><a href='https://create-react-app.dev/' target='_blank'><img id='REACT' src={REACT} /></a>
                  {Reacttxt ? <div id='absoluteName'><p>React</p></div> : null}
                  </motion.div>
                </div>

                
                <div id='library-container'>
                  <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} className="img-container-tech"
                   id='img-container-tech'><a href='https://gsap.com/' target='_blank'><img id='GSAP' src={GSAP} /></a>
                  {Gsap ? <div id='absoluteName'><p>GSAP</p></div> : null}
                  </motion.div>
                  <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} className="img-container-tech" id='img-container-tech'><a href='https://www.framer.com/motion/' target='_blank'><img id='FRAMERMOTION' src={FRAMERMOTION} /></a>
                  {FramerMotion ? <div id='absoluteName'><p>Framer Motion</p></div> : null}
                  </motion.div>
                  <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} className="img-container-tech" id='img-container-tech'><a href='https://axios-http.com/docs/intro' target='_blank'><img id='BOOTSTRAP' src={BOOTSTRAP} /></a>
                  {Bootstrap ? <div id='absoluteName'><p>Axios</p></div> : null}
                  </motion.div>
                  <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} className="img-container-tech" id='img-container-tech'><a href='https://react.semantic-ui.com/' target='_blank'><img id='SEMANTIC' src={SEMANTIC} /></a>
                  {Semantic ? <div id='absoluteName'><p>Semantic UI</p></div> : null}
                  </motion.div>
                </div>
              </div>

            </div>
        </div>

      </div>
    )
}