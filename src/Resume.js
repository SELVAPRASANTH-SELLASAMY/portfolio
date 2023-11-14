import './css/resume.css';
import phone from './assets/phone.png';
import email from './assets/email.png';
import add from './assets/address.png';
const Resume = () => {
    const printResume = () => {
        window.print();
    }
    return(
        <div className="resume-container">
            <div className="A4">
                <div className="sheet">
                    <header>
                        <div className="heading">
                            <div className="name">SELVAPRASANTH</div>
                            <div className="desig">Software Developer</div>
                        </div>
                        <div className="other-info">
                            <div className="phone">
                                <p>+91 9003413727</p>
                                <img src={phone} alt="phone" />
                            </div>
                            <div className="phone">
                                <p>prasanthsamy61@gmail.com</p>
                                <img src={email} alt="email" />
                            </div>
                            <div className="phone">
                                <p>3/188, Aasaariyar thottam,<br />
                                Pothupatti, Palani (Tk), Dindigul (Dt),<br />
                                Tamil nadu, india - 624618.</p>
                                <img src={add} alt="address" />
                            </div>
                        </div>
                    </header>
                    <footer>
                        <div className="summary">
                            <h1>SUMMARY</h1>
                            <p>As a fresher from Mechanical Engineering field, I’m excited to embark on a new journey in software
                                development. My educational background has equipped me with analytical thinking and problem-solving skills
                                that i’m eager to apply to coding. With a strong commitment to learning, i’m enthusiastic about embracing the
                                world of technology and programming to make a meaningful impact in the software developement field.</p>
                        </div>
                        <div className="columns">
                            <div className="left-column">
                                <div className="education">
                                    <h1>EDUCATION</h1>
                                    <h3 className='school'>Kongu Engineering College</h3>
                                    <p className='degree'>Bachelor's Degree in Mechanical Engineering</p>
                                    <p className="year">2020 - 2024</p>
                                    <h3 className='school'>Sri Renugadevi higher secondary school</h3>
                                    <p className="degree">HSC</p>
                                    <p className="year">2019 - 2020</p>
                                    <h3 className="school">Sri Renugadevi higher secondary school</h3>
                                    <p className="degree">SSLC</p>
                                    <p className="year">2017 - 2018</p>
                                </div>
                                <div className="skills">
                                    <h1>SKILLS</h1>
                                    <ul>
                                        <li>C++ Programming</li>
                                        <li>Java Programming</li>
                                        <li>C Programming</li>
                                        <li>Web Developement</li>
                                        <li>Modelling & Assembly in Creo</li>
                                        <li>Drafting in Autocad</li>
                                    </ul>
                                </div>
                                <div className="paper-presented">
                                    <h1>PAPER PRESENTED</h1>
                                    <ul>
                                        <li>“SIX STROKE ENGINE” in IMPERIUM
                                        2K22 at Kongu Engineering College,
                                        Perundurai, Erode. (To analyse the
                                        advantages of six stroke engine and the
                                        reasons behind its failure.)</li>
                                    </ul>
                                </div>
                                <div className="languages">
                                    <h1>LANGUAGES</h1>
                                    <ul>
                                        <li>Tamil</li>
                                        <li>English</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right-column">
                                <h1>PROJECTS DONE</h1>
                                <div className="projects-done">
                                    <div className="project">
                                        <h3 className="project-name">Personal Portfolio</h3>
                                        <p className="techstack">ReactJS, CSS, NodeJS & MongoDB</p>
                                        <ul>
                                            <li>This is my personal portfolio web applicaton build with the help
                                            of ReactJS framework.</li>
                                            <li>CSS is used to make it stylish and responsive to all screens.</li>
                                            <li>NodeJS is used here to create an API that can grab a contact
                                            message from client.</li>
                                            <li>Messages from client were stored in the MongoDB database.</li>
                                        </ul>
                                    </div>
                                    <div className="project">
                                        <h3 className="project-name">User Login and Registration Website</h3>
                                        <p className="techstack">HTML, CSS, JavaScript, PHP & MySQL</p>
                                        <ul>
                                            <li>This consist of simple static UI build with HTML.</li>
                                            <li>User’s login session was maintained using cookies upto 2 hrs.</li>
                                            <li>Backend interaction’s are done using JavaScript.</li>
                                            <li>To interact with server PHP was used.</li>
                                            <li>The datas are stored in the MySQL database.</li>
                                        </ul>
                                    </div>
                                    <div className="project">
                                        <h3 className="project-name">Design & Fabrication of Fertilizer Crusher</h3>
                                        <p className="techstack">Gear Milling & Welding</p>
                                        <ul>
                                            <li>It is a prototype that describes the process of doing fertilization
                                            and ploughing process together in agriculture.</li>
                                            <li>As of now those two processes are carried seperately.</li>
                                            <li>By combining those two processes we can save time and cost of land optimization.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="memberships">
                                    <h1>MEMBERSHIPS</h1>
                                    <ul>
                                        <li>Active Member of IEI (Institute of
                                        Engineers India).</li>
                                        <li>Active Member of ISTE (Indian Society for
                                        Technical Education).</li>
                                        <li>Active Member of National Service Scheme
                                        (NSS).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                <div className="print-btn">
                    <button onClick={()=>printResume()}>Print Resume</button>
                </div>
            </div>
        </div>
    )
}
export default Resume;