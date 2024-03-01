import '../Styling/projects.css';
import { useState } from 'react';


export default function Projects() { 

    const [p1, setP1] = useState(false);
    const [p2, setP2] = useState(false);
    const [p3, setP3] = useState(false);
    const [p4, setP4] = useState(false);

    return(
        <>
        <div id="projects-screen">
            <div id="project-list-container">
                <div id="project-bar"><button onClick={() => setP1(!p1)}>open</button></div>
                    {p1 ? <div id='more-info'>More info</div> : null}
                <div id="project-bar"><button onClick={() => setP2(!p2)}>open</button></div>
                    {p2 ? <div id='more-info'>More info</div> : null}
                <div id="project-bar"><button onClick={() => setP3(!p3)}>open</button></div>
                    {p3 ? <div id='more-info'>More info</div> : null}
                <div id="project-bar"><button onClick={() => setP4(!p4)}>open</button></div>
                    {p4 ? <div id='more-info'>More info</div> : null}
            </div>
        </div>
        </>
    )
}