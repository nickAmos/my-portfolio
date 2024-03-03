import { Icon } from 'semantic-ui-react';
import '../Styling/projects.css';
import { gsap } from "gsap";
import { useState } from 'react';
import { useGSAP } from '@gsap/react';


export default function Projects() { 

    const [p1, setP1] = useState(false);
    const [Dp1, setDelayP1] = useState(false);
    const [p2, setP2] = useState(false);
    const [Dp2, setDelayP2] = useState(false);
    const [p3, setP3] = useState(false);
    const [Dp3, setDelayP3] = useState(false);
    const [p4, setP4] = useState(false);
    const [Dp4, setDelayP4] = useState(false);

    useGSAP(() => {
        gsap.from(".more-info-1", {
            height: 0,
            duration: 0.5,
            ease: 'expo.out'
        })
    }, [p1]);

    useGSAP(() => {
        gsap.to(".more-info-1", {
            height: 0,
            duration: 0.5,
            ease: 'expo.out'
        })
    }, [Dp1]);

    const handleP1 = () => {
        if( !p1 ) {
            setP1(!p1)
            return
        } else if (p1) {
            setDelayP1(!Dp1);
            setTimeout(() => {
                setP1(!p1);
            },400);
        }
        
    }

    useGSAP(() => {
        gsap.from(".more-info-2", {
            height: 0,
            duration: 0.5,
            ease: 'expo.out'
        })
    }, [p2]);

    useGSAP(() => {
        gsap.to(".more-info-2", {
            height: 0,
            duration: 0.5,
            ease: 'expo.out'
        })
    }, [Dp2]);

    const handleP2 = () => {
        if( !p2 ) {
            setP2(!p2)
            return
        } else if (p2) {
            setDelayP2(!Dp2);
            setTimeout(() => {
                setP2(!p2);
            },400);
        }
        
    }

    useGSAP(() => {
        gsap.from(".more-info-3", {
            height: 0,
            duration: 0.5,
            ease: 'expo.out'
        })
    }, [p3]);

    useGSAP(() => {
        gsap.to(".more-info-3", {
            height: 0,
            duration: 0.5,
            ease: 'expo.out'
        })
    }, [Dp3]);

    const handleP3 = () => {
        if( !p3 ) {
            setP3(!p3)
            return
        } else if (p3) {
            setDelayP3(!Dp3);
            setTimeout(() => {
                setP3(!p3);
            },400);
        }
        
    }

    useGSAP(() => {
        gsap.from(".more-info-4", {
            height: 0,
            duration: 0.5,
            ease: 'expo.out'
        })
    }, [p4]);

    useGSAP(() => {
        gsap.to(".more-info-4", {
            height: 0,
            duration: 0.5,
            ease: 'expo.out'
        })
    }, [Dp4]);

    const handleP4 = () => {
        if( !p4 ) {
            setP4(!p4)
            return
        } else if (p4) {
            setDelayP4(!Dp4);
            setTimeout(() => {
                setP4(!p4);
            },400);
        }
        
    }

    return(
        <>
        <div id="projects-screen">
            <div id="project-list-container">
                <div id="project-bar">
                    <div id='project-heading'>
                        <h3>Project heading</h3>
                    </div>
                    <div id='project-keys'>
                        <p>things | the projects | does</p>
                    </div>
                    <div id='project-button-container'>
                        <div id='handleClick' onClick={() => handleP1()}>
                        {p1 ? <Icon flipped='vertically'  size='big' name='caret square down outline'/> : <Icon size='big'name='caret square down outline' />}
                        </div>
                    </div>
                    </div>
                    {p1 ? <div className='more-info-1' id='more-info'>More info</div> : null}
                <div id="project-bar">
                    <div id='project-heading'>
                        <h3>Project heading</h3>
                    </div>
                    <div id='project-keys'>
                        <p>things | the projects | does</p>
                    </div>
                    <div id='project-button-container'>
                        <div id='handleClick' onClick={() => handleP2()}>
                            {p2 ? <Icon flipped='vertically'  size='big' name='caret square down outline'/> : <Icon size='big'name='caret square down outline' />}
                        </div>
                    </div>
                    </div>
                    {p2 ? <div className='more-info-2' id='more-info'>More info</div> : null}
                <div id="project-bar">
                    <div id='project-heading'>
                        <h3>Project heading</h3>
                    </div>
                    <div id='project-keys'>
                        <p>things | the projects | does</p>
                    </div>
                    <div id='project-button-container'>
                        <div id='handleClick' onClick={() => handleP3()}>
                        {p3 ? <Icon flipped='vertically'  size='big' name='caret square down outline'/> : <Icon size='big'name='caret square down outline' />}
                        </div>
                    </div>
                    </div>
                    {p3 ? <div className='more-info-3' id='more-info'>More info</div> : null}
                <div id="project-bar">
                    <div id='project-heading'>
                        <h3>Project heading</h3>
                    </div>
                    <div id='project-keys'>
                        <p>things | the projects | does</p>
                    </div>
                    <div id='project-button-container'>
                        <div id='handleClick' onClick={() => handleP4()}>
                            {p4 ? <Icon  flipped='vertically'  size='big' name='caret square down outline'/> : <Icon size='big'name='caret square down outline' />}
                        </div>
                    </div>
                    </div>
                    {p4 ? <div className='more-info-4' id='more-info'>More info</div> : null}
            </div>
        </div>
        </>
    )
    
}