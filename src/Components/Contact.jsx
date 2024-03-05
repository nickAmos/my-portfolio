import '../Styling/App.css';
import { Icon } from 'semantic-ui-react';
import { useState } from 'react';
import { motion} from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {

    const [clipboard, setClipboard] = useState(false);
    const [copied, setcopied] = useState(false);

    useGSAP(() => {

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
      
  
    })
  
  
  
    function getEmail() {
      let copyEmail = document.getElementById('email').innerHTML;
      console.log(copyEmail);
      navigator.clipboard.writeText(copyEmail);
    }
  

    return(
        <>
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

</div></>
    )
}