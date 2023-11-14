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
            percent:85,
            progName:"C++", 
            quotes:"Designed to be a language that balances efficiency"
        },
        {
            Id:3,
            percent:90,
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
            percent:65,
            progName:"HTML", 
            quotes:"Used to create and structure content on the World Wide Web"
        },
        {
            Id:6,
            percent:70,
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
        }
        //edit this and add another languages
    ];
    return(
        <div className="about-container">
            <div className="skillsets">
                <h1>Skills</h1>
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
                    <h1>About Me</h1>
                    <p>I am Selvaprasanth Sellasamy. I am currently pursuing my Bachelors degree in Mechanical Engineering domain at Kongu Engineering College, Perundurai, Erode. 
                        I am looking for greatest opportunity as a Software developer at reputed company where i can contribute to the developement of the company with my technical and problem solving skills. 
                        The Strength I have is Whatever task i set to do, I put my maximum effort to complete it with 100% client satisfaction. I am eagerly waiting to start my tech career with the reputed company.
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