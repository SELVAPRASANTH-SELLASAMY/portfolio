import './css/about.css';
import inspire from './assets/inspiration.svg';
import plan from './assets/planning.svg';
import prototype from './assets/prototype.svg';
import code from './assets/coding.svg';
import ProgressBar from './ProgressBar';
const About = () =>{
    const progressArray = [
        {   Id:1,
            percent:65,
            progName:"React.JS", 
            quotes:"It is quite easy to create interactive User Interfaces"},
        {
            Id:2,
            percent:75,
            progName:"C++", 
            quotes:"Designed to be a language that balances efficiency"
        },
        {
            Id:3,
            percent:65,
            progName:"JAVA", 
            quotes:"Multi-platform, object-oriented, and network-centric language"
        },
        {
            Id:4,
            percent:75,
            progName:"C", 
            quotes:"There is often limited memory and processing power"
        },
        {
            Id:5,
            percent:75,
            progName:"HTML", 
            quotes:"Used to create and structure content on the World Wide Web"
        },
        {
            Id:6,
            percent:80,
            progName:"CSS", 
            quotes:"Enhancing the visual design of HTML elements."
        },
        {
            Id:7,
            percent:55,
            progName:"Javascript", 
            quotes:"Adding interactivity and dynamic behavior to web pages"
        },
        {
            Id:8,
            percent:50,
            progName:"PHP", 
            quotes:"Server side language, Known for its ease of use"
        },
        {
            Id:9,
            percent:55,
            progName:"MySQL", 
            quotes:"Offers efficient data storage and retrieval"
        },
        {
            Id:10,
            percent:45,
            progName:"NodeJS",
            quotes:"NodeJS is non blocking, the way it runs the code by default is asynchronous code"
        },
        {
            Id:11,
            percent:65,
            progName:"MongoDB",
            quotes:"MongoDB is built on a scale-out architecture that has become popular with developers"
        }
        //edit this and add another languages
    ];
    return(
        <div className="about-container">
            <div className="skillsets">
                {/* <p className="msg">Scroll to view more</p> */}
                <h1 id='skills'>Skills</h1>
                <div className="progressbars">
                    {
                        progressArray.map((info)=>(
                            <ProgressBar key={info.Id} props={info}/>
                        ))
                    }
                </div>
            </div>
            <div className="about-me">
                <div className="about">
                    <h1>Who Am I</h1>
                    <p>
                        I'm Selvaprasanth Sellasamy, a Mechanical Engineering graduate from Kongu Engineering College, Erode, Tamil Nadu. Completed my BE degree in the year 2024. I have developed a keen interest in web developement and frontend developement. My passion for coding and design drives me to constantly learn and adapt new technologies. In addition to my technical expertise, I'm a dedicated and proactive problem-solving and working collaboratively in team enivironments. I'm eager to bring my knowledge and enthusiasm to a software engineering role, where I can contribute to innovative projects and continue to grow professionally.
                    </p>
                </div>
                <div className="work">
                    <h1>How I Work</h1>
                    <p>Writes code to build and maintain websites and web applications, ensuring they function correctly and meet design requirements.</p>
                    <div className="flow">
                        <div className="flow-container">
                            <img src={inspire} alt="inspiration" />
                            <p>Inspiration</p>
                        </div>
                        <div className="flow-container">
                            <img src={plan} alt="planning" />
                            <p>Planning</p>
                        </div>
                        <div className="flow-container">
                            <img src={prototype} alt="prototyping" />
                            <p>Prototyping</p>
                        </div>
                        <div className="flow-container">
                            <img src={code} alt="coding" />
                            <p>Coding</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;