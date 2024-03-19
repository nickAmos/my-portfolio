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
    const [clipcontent, setClipcontent] = useState('nick.amos2000@gmail.com')

    useGSAP(() => {

    let contactTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".contactHolder",
          start: "-350 center",
          end: "+=250",
          scrub: true,

        }
      })
  
      contactTL.from(".contactHolder", {
        opacity: 0
      })
  
      contactTL.from(".IconReal", {
        y: -75,
        stagger: 0.1
      })

      contactTL.from(".get-in-touch", {
        y: 75,
        opacity: 0
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
  <div id='get-in-touch' className='get-in-touch'><p>Get in touch!</p></div>

{clipboard ? 
<motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} onClick={() => {
  setTimeout(() => {
    getEmail()
    setClipboard(!clipboard)
    setcopied(true);
  },250);
  setTimeout(() => {
    setcopied(false);
  }, 2000);
}} id='clipboardContainer'>
  <div id='relative-container'>
  <div id='email-flex'>
    <p id='email'>{clipcontent}</p>
    <div id='copy-outline'>
      <Icon name='copy outline'/>
      </div>
  </div>
  
  </div>
</motion.div>
 : null}
 
 {copied ? <div id='copied-txt'>Copied!</div> : null} 

      <div className='contactHolder' id='contact-icon-holder'>
      <div onClick={() => {
        setClipboard(!clipboard);
        setClipcontent('nick.amos2000@gmail.com');
        }} id='getMail'>
        <Icon className='IconReal Mail' name='mail' size='big'/>
      </div>
        <div><a href='https://github.com/nickAmos?tab=overview&from=2024-02-01&to=2024-02-28' target='_blank'><Icon className='IconReal Github' name='github' size='big'/></a></div>
        <div><a href='https://www.linkedin.com/in/nick-amos-2a2688247/' target='_blank'><Icon className='IconReal Linkedin' name='linkedin' size='big'/></a></div>
        <div onClick={() => {
        setClipboard(!clipboard);
        setClipcontent('(+61) 400480350');
        
        }}id='getPhone'><Icon className='IconReal X' name='phone' size='big'/></div>
      </div>

  </div>

</div></>
    )
}