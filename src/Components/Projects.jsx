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
        gsap.from(".project-bar-1", {
            scrollTrigger: {
                trigger: ".project-bar-1",
                start: "bottom bottom"
            },
            x: -300,
            ease: 'expo.out',
            duration: 2,
            opacity:0
        })

        gsap.from(".project-bar-2", {
            scrollTrigger: {
                trigger: ".project-bar-2",
                start: "bottom bottom"
            },
            x: -300,
            ease: 'expo.out',
            duration: 2
        })
        gsap.from(".project-bar-3", {
            scrollTrigger: {
                trigger: ".project-bar-3",
                start: "bottom bottom"
            },
            x: -300,
            ease: 'expo.out',
            duration: 2
        })
        gsap.from(".project-bar-4", {
            scrollTrigger: {
                trigger: ".project-bar-4",
                start: "bottom bottom"
            },
            x: -300,
            ease: 'expo.out',
            duration: 2
        })
    })

    useGSAP(() => {
        gsap.from(".more-info-1", {
            height: 0,
            duration: 0.5,
            ease: 'expo.out'
        })
        gsap.from(".plus-minus-1", {
            rotate: 90,
            opacity: 0
        })

        setTimeout(() => {
            gsap.to(".plus-minus-1", {
                rotate:0,
                opacity:100
            })
        }, 200)
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

        gsap.from(".plus-minus-2", {
            rotate: 90,
            opacity: 0
        })

        setTimeout(() => {
            gsap.to(".plus-minus-2", {
                rotate:0,
                opacity:100
            })
        }, 200)
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

        gsap.from(".plus-minus-3", {
            rotate: 90,
            opacity: 0
        })

        setTimeout(() => {
            gsap.to(".plus-minus-3", {
                rotate:0,
                opacity:100
            })
        }, 200)

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

        gsap.from(".plus-minus-4", {
            rotate: 90,
            opacity: 0
        })

        setTimeout(() => {
            gsap.to(".plus-minus-4", {
                rotate:0,
                opacity:100
            })
        }, 200)
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
                <div id="project-bar" className='project-bar-1'>
                    <div id='project-heading'>
                        <h3>Project heading</h3>
                    </div>
                    <div id='project-keys'>
                        <p>things | the projects | does</p>
                    </div>
                    <div id='project-button-container'>
                        <div id='handleClick' onClick={() => handleP1()}>
                        {p1 ? <div id='minus-container'><p className='plus-minus-1'>-</p></div> : <div id='plus-container'><p className='plus-minus-1'>+</p></div>}
                        </div>
                    </div>
                    </div>
                    {p1 ? <div className='more-info-1' id='more-info'>More info</div> : null}
                <div id="project-bar" className='project-bar-2'>
                    <div id='project-heading'>
                        <h3>Project heading</h3>
                    </div>
                    <div id='project-keys'>
                        <p>things | the projects | does</p>
                    </div>
                    <div id='project-button-container'>
                        <div id='handleClick' onClick={() => handleP2()}>
                            {p2 ? <div id='minus-container'><p className='plus-minus-2'>-</p></div> : <div id='plus-container'><p className='plus-minus-2'>+</p></div>}
                        </div>
                    </div>
                    </div>
                    {p2 ? <div className='more-info-2' id='more-info'>More info</div> : null}
                <div id="project-bar" className='project-bar-3'>
                    <div id='project-heading'>
                        <h3>Project heading</h3>
                    </div>
                    <div id='project-keys'>
                        <p>things | the projects | does</p>
                    </div>
                    <div id='project-button-container'>
                        <div id='handleClick' onClick={() => handleP3()}>
                        {p3 ? <div id='minus-container'><p className='plus-minus-3'>-</p></div> : <div id='plus-container'><p className='plus-minus-3'>+</p></div>}
                        </div>
                    </div>
                    </div>
                    {p3 ? <div className='more-info-3' id='more-info'>More info</div> : null}
                <div id="project-bar" className='project-bar-4'>
                    <div id='project-heading'>
                        <h3>Project heading</h3>
                    </div>
                    <div id='project-keys'>
                        <p>things | the projects | does</p>
                    </div>
                    <div id='project-button-container'>
                        <div id='handleClick' onClick={() => handleP4()}>
                            {p4 ? <div id='minus-container'><p className='plus-minus-4'>-</p></div> : <div id='plus-container'><p className='plus-minus-4'>+</p></div>}
                        </div>
                    </div>
                    </div>
                    {p4 ? <div className='more-info-4' id='more-info'>More info</div> : null}
            </div>
        </div>
        </>
    )
    
}