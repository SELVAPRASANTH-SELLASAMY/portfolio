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
                            <p>This is my personal portfolio web application build with the help of React.js. 
                                It consists of simple UI animations and it was optimized for mpbile, tablet and computers. 
                                In future I am planning to implement some dynamic features with the help of backend techstacks like node.js, express.js etc. 
                                I need all of your valuable feedbacks and comments about this projects. So. please send your feedbacks by 
                                clicking on contact on this application.
                            </p>
                            <h3>Techstacks used</h3>
                            <ul>
                                <li>ReactJS</li>
                                <li>NodeJS</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <div className="wrap-content">
                            <h2>User sign up & sign in website</h2>
                            <p>This website is a simple user login and registration website consists of mySQLs CRUD capabilities. 
                                It was optimized for both mobile phones and laptops. If users already have an account they can login using their 
                                login credentials or else they can create a new account then After logging in they can update their datas passwords 
                                and can delete their account. Also, users can update their profile pictures. The users login session was maintained 
                                upto one hour then it will be expired and users are asked to logging in again. Users passwords are hashed using BCRYPT 
                                which is an inbuit algorithm provided by php itself to ensure the password safety and Users datas are maintained in mySQL 
                                database. This website will work perfectly on chrome browser.
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
                            <p>TThis is a cloned site of YouTube. The tech stacks which I had used for this project are React.js and CSS.
                                Currently I am working on its frontend. Once I will be completing it then I will start to work on backend and server.
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