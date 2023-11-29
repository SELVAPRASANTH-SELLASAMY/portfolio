import { useEffect, useRef, useState } from 'react';
import './css/home.css';
import close from './assets/close.svg';
import Carousels from './Carousels';
const Home = () =>{
    const [FDAnimation,setFDAnimation] = useState(true);
    const [showMore,setShowMore] = useState(false);
    const [T1,setT1] = useState(null);

    const FDdisplayarea = useRef();
    const cursorPlay = useRef();
    const more = useRef();
    const leftArrow = useRef();
    const rightArrow = useRef();
    const wrap = useRef();

    const tech = ['Frontend developer','Backend Developer','FullStack Developer'];
    const [te,setTe] = useState(0);
    //const str = "Frontend developer";
    var FD = "";
    var i = 0;
    const FDAnimate = () =>{
        var str = tech[te];
        var string = str.split('');
        const FDtimeout = setInterval(()=>{
            setT1(FDtimeout);
            FD+=string[i];
            try{
                FDdisplayarea.current.innerText = FD;
            }
            catch(error){
                console.log(error)
            }
            ++i;
            if(i===(string.length))
            {
                clearInterval(FDtimeout);
                if(te===2){
                    setTe(0);
                }
                else{
                setTe(te+1);}
                try{
                    cursorPlay.current.style.animationPlayState = 'paused';
                    cursorPlay.current.style.visibility = 'visible';
                }
                catch(error){
                    console.log(error);
                }
                Waiting();
            }
        },150)
    }
    const Waiting = () =>{
        setTimeout(()=>{
            setFDAnimation(!FDAnimation);
            try{
                cursorPlay.current.style.animationPlayState = 'running';
            }
            catch(error){
                console.log(error);
            }
        },5000);
    }
    useEffect(()=>{
        FDAnimate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[FDAnimation])
    useEffect(()=>{
        more.current.style.display = showMore ? 'block' : 'none';
    },[showMore])
    const swipLeft = () => {
        wrap.current.scrollBy({left: -wrap.current.offsetWidth, behavior:'smooth'});
    }
    const swipRight = () => {
        wrap.current.scrollBy({left: wrap.current.offsetWidth, behavior:'smooth'});
    }
    useEffect(()=>{
        return ()=>{
            clearInterval(T1)
        }
    },[T1])
    return(
        <div className="home-container">
            <div className="texts">
                <h1>Hi, I'm Prasanth</h1>
                <div className="fdanime">
                    <div ref={FDdisplayarea} className="h2"></div>
                    <div ref={cursorPlay} className="cursor"></div>
                </div>
                <h3>Developing <br />
                    Web Apps For <br />
                    The Bright <br />
                    Future
                </h3>
                <p>The world always seems brighter when you’ve just made something that wasn’t there before</p>
                <button onClick={()=>setShowMore(!showMore)} type='submit'>Take a tour &gt;</button>
            </div>
            <div className="carousel-area">
                <Carousels/>
            </div>
            <div ref={more} className="more-information">
                <div className="close-icon">
                    <img onClick={()=>setShowMore(false)} src={close} alt="close" />
                </div>
                <h1>About me</h1>
                <div className="wrapper">
                    <div onClick={()=>swipRight()} ref={rightArrow} className="arrows">&gt;</div>
                    <div onClick={()=>swipLeft()} ref={leftArrow} className="arrows-left">&gt;</div>
                    <div ref={wrap} className="wrap">
                        <h1>Education</h1>
                        <div className="edu">
                            <div className="degree">Bachelor of Engineering</div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Stream</td>
                                        <td>Mechanical Engineering</td>
                                    </tr>
                                    <tr>
                                        <td>College</td>
                                        <td>Kongu Engineering College</td>
                                    </tr>
                                    <tr>
                                        <td>Year</td>
                                        <td>2020 - 2024</td>
                                    </tr>
                                    <tr>
                                        <td>CGPA</td>
                                        <td>8.04 CGPA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="edu">
                            <div className="degree">HSC (+2)</div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Stream</td>
                                        <td>Computer Science</td>
                                    </tr>
                                    <tr>
                                        <td>School</td>
                                        <td>Sri Renugadevi higher secondary school</td>
                                    </tr>
                                    <tr>
                                        <td>Year</td>
                                        <td>2019 - 2020</td>
                                    </tr>
                                    <tr>
                                        <td>Percentage</td>
                                        <td>74.1%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="edu">
                            <div className="degree">SSLC</div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Stream</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>School</td>
                                        <td>Sri Renugadevi higher secondary school</td>
                                    </tr>
                                    <tr>
                                        <td>Year</td>
                                        <td>2017 - 2018</td>
                                    </tr>
                                    <tr>
                                        <td>Percentage</td>
                                        <td>82.4%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="wrap">
                        <h1>Why I choose Software</h1>
                        <div className="edu">
                            <p>I am from computer science background in my HSC. But, In schools there's no opportunity for learning programming even
                                there's no chance to understand what actually programming is. So, I can't understood about it. After my HSC i'm in the
                                need to choose my career path. But, i don't have enough cut off marks to get a computer science sheet in good college.
                                I decided to join in a good college. So, that i can able to equip skills in some areas to survive in this fastest world.
                                So, I choose Mechanical Engineering. In my third semester i have C programming paper in my academic curricula as a compulsory paper.
                                My programming career starts from there. The interest i have in computer programming boost's my eagerness in learning more about programming.
                                So, Apart from curriculum i started to learn from external sources such as social medias & websites. Some of my friends also
                                help me to equip skills from them. So, I'm happily continue my journey towards searching my position in IT industries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;