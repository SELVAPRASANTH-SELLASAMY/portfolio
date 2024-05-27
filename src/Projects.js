import './css/projects.css';
import web from './assets/website.jpg';
import ytp from './assets/youtube.jpg';
import ipl from './assets/ipl.jpg';
import folio from './assets/portfolio-image.jpg';
import close from './assets/close.svg';
import { useEffect, useRef, useState } from 'react';
const Projects = () =>{
    const projectGalleryContents = [
        {
            id:1,
            image:folio,
            name:'Portfolio',
            color:'#FF5722',
            x:'-90%',
            y:'10%'
        },
        {
            id:2,
            image:web,
            name:'Website',
            color:'#8BC34A',
            x:'50%',
            y:'-10%'
        },
        {
            id:3,
            image:ytp,
            name:'YouTube Clone',
            color:'#FFEB3B',
            x:'-90%',
            y:'85%'
        },
        {
            id:4,
            image:ipl,
            name:'API Filteration',
            color:'#03A9F4',
            x:'40%',
            y:'25%'
        }
    ]
    const [viewMoreVisibility, setViewMoreVisibility] = useState(false);
    const viewMore = useRef();
    useEffect(()=>{
        viewMore.current.style.display = viewMoreVisibility ? 'flex' : 'none';
    },[viewMoreVisibility])

    return(
        <div className="projects-container">
            <div className="project-container-2">
                <h1>Some of My <br />Works</h1>
                <div className="works">
                    People tend to think of the web as a way to get information or perhaps as a place to carry out ecommerce. 
                    But really, the web is about accessing applications. Think of each website as an application, and every single click, 
                    every single interaction with that site, is an opportunity to be on the very latest version of that application. <br />
                    <button onClick={()=>setViewMoreVisibility(true)}>View More &gt;</button>
                </div>
                <div ref={viewMore} className="project-information">
                    <div className="close-icon">
                        <img onClick={()=>setViewMoreVisibility(false)} src={close} alt="close" />
                    </div>
                    <div className="wrap-all-project-contents">
                        <div className="wrap-content">
                            <h2>Portfolio</h2>
                            <p>Engaging animations that enhance the visual appeal and interactivity of
                                my portfolio, grabbing visitor’s attention and making the user experience
                                more dynamic.
                                This portfolio is designed to adapt seamlessly to various screen sizes
                                and devices, ensuring optimal viewing and usability whether accessed
                                on a desktop, tablet, or smartphone.
                                A built-in contact form allows visitors to easily reach out to you directly
                                through your portfolio, providing a convenient and professional means of
                                communication.
                                Users have the option to download my resume directly from my portfolio,
                                making it convenient for potential employers or collaborators to access
                                my professional credentials offline.
                            </p>
                            <h3>Techstacks used</h3>
                            <ul>
                                <li>ReactJS</li>
                                <li>NodeJS</li>
                                <li>CSS</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="wrap-content">
                            <h2>Company landing page with user login and registration</h2>
                            <p>The landing page is designed to be responsive, ensuring it looks and
                                functions well on various devices and screen sizes, providing a
                                consistent user experience across platforms.
                                Users can create accounts by registering with the platform and then log
                                in securely using their credentials, granting them access to personalized
                                features and content.
                                Upon successful login, user’s sessions are initiated, which remain active
                                for up to one hour. After this period of inactivity, the session expires, and
                                users are prompted to log in again for security purposes.
                                Logged-in users have the capability to update their personal details, such
                                as name, email, and other relevant information, ensuring their profile
                                remains accurate and up to date.
                                Users can upload, change, or remove their profile pictures, allowing them
                                to customize their profiles and personalize their accounts according to
                                their preferences.
                                Users have the ability to change their passwords as needed, providing
                                an additional layer of security and control over their accounts.
                                Should users choose to do so, they can delete their accounts
                                permanently from the platform, removing all associated data and ending
                                their relationship with the company's landing page.
                            </p>
                            <h3>Techstacks used</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>PHP</li>
                                <li>MySQL</li>
                                <li>AJAX</li>
                            </ul>
                        </div>
                        <div className="wrap-content">
                            <h2>YouTube clone Frontend</h2>
                            <p>This is a frontend clone of YouTube. The tech stacks which I had used for this project are React.js and CSS.
                                Currently I am working on its frontend. Once it will be finished then I will start to work on backend and server side.
                            </p>
                            <h3>Techstacks used</h3>
                            <ul>
                                <li>ReactJS</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <div className="wrap-content">
                            <h2>REST API Filtering</h2>
                            <p>It is a frontend react application which done a filtration of data's from API according to option selected by user's</p>
                            <h3>Techstacks used</h3>
                            <ul>
                                <li>ReactJS</li>
                                <li>CSS</li>
                                <li>Axios</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-gallery">
                {
                    projectGalleryContents.map((obj) => (
                        <div key={obj.id} className="project-image">
                            <img src={obj.image} alt={`${obj.name}`} />
                            <div style={{top:`${obj.y}`, left:`${obj.x}` ,backgroundColor:`${obj.color}`}} className="project-name">
                                {`${obj.name}`}
                                <div style={{borderColor:`${obj.color}`}} className="after"></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Projects;