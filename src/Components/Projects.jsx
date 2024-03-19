import { Icon } from 'semantic-ui-react';
import '../Styling/projects.css';
import { gsap } from "gsap";
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import testDirectory from '../Images/TestDirectory.png';
import pokeStreak from '../Images/PokeStreak.png';
import shoeStore from '../Images/ShoeStore.png';
import taskManager from '../Images/TaskManager.png';


export default function Projects() { 

    const [p1, setP1] = useState(false);
    const [Dp1, setDelayP1] = useState(false);
    const [p2, setP2] = useState(false);
    const [Dp2, setDelayP2] = useState(false);
    const [p3, setP3] = useState(false);
    const [Dp3, setDelayP3] = useState(false);
    const [p4, setP4] = useState(false);
    const [Dp4, setDelayP4] = useState(false);

    const [sourceOne, setSourceOne] = useState(false);

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

        gsap.from(".projects-title", {
            scrollTrigger: {
                trigger: ".projects-title",
                start: "center bottom",
                end: "+=200",
                scrub: true,
 
            },
            y: 60,
        opacity: 0
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
            <div id='projects-title'className='projects-title'>
                <h1>My Projects</h1>
            </div>
            <div id="project-list-container">
                <div id="project-bar" className='project-bar-1'>
                    <div id='project-heading'>
                        <h3>Shoe Store</h3>
                    </div>
                    <div id='project-keys'>
                        <p>React router navigation | Mapping complex children</p>
                    </div>
                    <div id='project-button-container'>
                        <div id='handleClick' onClick={() => handleP1()}>
                        {p1 ? <div id='minus-container'><p className='plus-minus-1'>-</p></div> : <div id='plus-container'><p className='plus-minus-1'>+</p></div>}
                        </div>
                    </div>
                    </div>
                    {p1 ? <div className='more-info-1' id='more-info'>
                        <div id='more-info-txt'>
                    {`A Shoe Store with focus on positive user experience through satisfying page navigation. Keep track of items in the cart throughout all pages, filter by both price and type of running shoe. Checkout page allows for editing of the cart just prior to purchase to avoid page hopping which is present in many exisiting shoe stores.`}
                    </div>
                        <div id='navigation-container'>
                            <div id='project-img-container'>
                                <a href='http://nickAmos.github.io/The-Cool-Shoe-Store' target='_blank'>
                                    <div id='overlay'>
                                     <p>View Site</p>
                                    </div>
                                </a>
                                <img src={shoeStore}/>
                            </div>
                            <div id='source-code'>
                                <p>Code</p>
                                <a href='https://github.com/nickAmos/The-Cool-Shoe-Store' target='_blank'><Icon name='code' size='large' /></a>
                            </div>
                        </div>  
                    </div> : null}
                <div id="project-bar" className='project-bar-2'>
                    <div id='project-heading'>
                        <h3>Test Directory </h3>
                    </div>
                    <div id='project-keys'>
                        <p>Internal API | Large dataset filtering </p>
                    </div>
                    <div id='project-button-container'>
                        <div id='handleClick' onClick={() => handleP2()}>
                            {p2 ? <div id='minus-container'><p className='plus-minus-2'>-</p></div> : <div id='plus-container'><p className='plus-minus-2'>+</p></div>}
                        </div>
                    </div>
                    </div>
                    {p2 ? <div className='more-info-2' id='more-info'>
                        <div id='more-info-txt'>
                        {`An updated version of Austin Healths Test Directory that utilises react to display 1000+ individual pathology tests with only one dynamic page. Smart search bar filters through tests based on full scientific name, common alternative names and the LIS (laboratory Information System) test code.`} 
                        </div>
                        <div id='navigation-container'>
                            <div id='project-img-container'>
                            <a href='http://nickAmos.github.io/test-test-directory' target='_blank'>
                                <div id='overlay'>
                                   <p>View Site</p>
                                </div>
                            </a>
                                <img src={testDirectory}/>
                            </div>
                            <div id='source-code'>
                                <p>Code</p>
                                <a href='https://github.com/nickAmos/test-test-directory' target='_blank'><Icon name='code' size='large' /></a>
                            </div>
                        </div> 
                    </div> : null}
                <div id="project-bar" className='project-bar-3'>
                    <div id='project-heading'>
                        <h3>Pokemon Game</h3>
                    </div>
                    <div id='project-keys'>
                        <p>RESTful API | AXIOS data fetching</p>
                    </div>
                    <div id='project-button-container'>
                        <div id='handleClick' onClick={() => handleP3()}>
                        {p3 ? <div id='minus-container'><p className='plus-minus-3'>-</p></div> : <div id='plus-container'><p className='plus-minus-3'>+</p></div>}
                        </div>
                    </div>
                    </div>
                    {p3 ? <div className='more-info-3' id='more-info'>
                        <div id='more-info-txt'>
                        {`Guess which of the three generated Pokemon know the prompted learned move. Repeated API fetching handled by AXIOS paired with styled loading state ensures enjoyable flow to the game. Change the theme of all pages through the toggle found in the home page. `}
                        </div>
                        <div id='navigation-container'>
                            <div id='project-img-container'>
                            <a href='http://nickAmos.github.io/PokeSreak' target='_blank'>
                                <div id='overlay'>
                                   <p>View Site</p>
                                </div>
                            </a>
                                <img src={pokeStreak}/>
                            </div>
                            <div id='source-code'>
                                <p>Code</p>
                                <a href='https://github.com/nickAmos/PokeSreak' target='_blank'><Icon name='code' size='large' /></a>
                            </div>
                        </div> 
                    </div> : null}
                <div id="project-bar" className='project-bar-4'>
                    <div id='project-heading'>
                        <h3>Task Manager </h3>
                    </div>
                    <div id='project-keys'>
                        <p>React DnD | Local storage </p>
                    </div>
                    <div id='project-button-container'>
                        <div id='handleClick' onClick={() => handleP4()}>
                            {p4 ? <div id='minus-container'><p className='plus-minus-4'>-</p></div> : <div id='plus-container'><p className='plus-minus-4'>+</p></div>}
                        </div>
                    </div>
                    </div>
                    {p4 ? <div className='more-info-4' id='more-info'>
                        <div id='more-info-txt'>
                        {`Organise tasks based on their urgency / frequency using React Drag and Drop. This library allows for created task cards to be moved around the screen and rendered differently depending on the container they are dropped in.`}
                        </div>
                        <div id='navigation-container'>
                            <div id='project-img-container'>
                            <a href='http://nickAmos.github.io/Task-Manager' target='_blank'>
                                <div id='overlay'>
                                   <p>View Site</p>
                                </div>
                            </a>
                                <img src={taskManager}/>
                            </div>
                            <div id='source-code'>
                                <p>Code</p>
                                <a href='https://github.com/nickAmos/Task-Manager' target='_blank'><Icon name='code' size='large' /></a>
                            </div>
                        </div> 
                    </div> : null}
            </div>
        </div>
        </>
    )
    
}