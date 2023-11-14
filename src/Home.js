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

    const str = "Frontend developer";
    const string = str.split('');
    var FD = "";
    var i = 0;
    const FDAnimate = () =>{
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
                try{
                    cursorPlay.current.style.animationPlayState = 'paused';
                }
                catch(error){
                    console.log(error);
                }
                cursorPlay.current.style.visibility = 'visible';
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
                <h1>Who am I</h1>
                <div className="wrap">
                    <div className="para">
                        <div className="paragraph">
                            I am <b>Selvaprasanth Sellasamy</b> belong from palani, Dindigul district.
                            I am currently pursuing my Bachelors degree in mechanical engineering domain.
                            But, More passionate about software developement. So, I decided to build my
                            career in IT industry.
                        </div>
                        <div className="paragraph">
                            As I navigate the intricate world of mechanical engineering, 
                            my passion for software development shines like a guiding star. 
                            While I immerse myself in the principles of mechanics, 
                            I can't help but be captivated by the boundless possibilities that software engineering offers. 
                            This field has become more than just a curiosity; it's my calling, 
                            and I'm determined to forge a remarkable career in the tech industry.
                        </div>
                        <div className="paragraph">
                            The fusion of my mechanical engineering background and 
                            burgeoning fascination with software development brings a unique blend of analytical thinking, 
                            problem-solving skills, and a creative mindset to the table. 
                            These are the very qualities that thrive in the dynamic landscape of the tech world. 
                            I envision a future where I can not only design and engineer physical systems but also breathe life into them with the power of code.
                        </div>
                        <div className="paragraph">
                            The software industry isn't just about writing lines of code; it's about crafting solutions, optimizing processes, and creating products that 
                            can change the way we live and work. I yearn to be part of this transformative process. I'm ready to embrace the challenges, 
                            think outside the box, and make a meaningful impact. Whether it's developing cutting-edge apps, optimizing algorithms, or creating innovative 
                            software for the next generation of smart devices, I see software development as the canvas where I can paint my aspirations and ideas.
                        </div>
                        <div className="paragraph">
                            I'm not merely switching lanes; I'm merging the best of both worlds. The mechanical engineering foundation I've built is a solid platform on 
                            which I intend to construct a thriving career in software development. With my passion as my fuel and my skill set as my compass, 
                            I'm poised to navigate this exciting journey, poised to create, innovate, and make a lasting mark in the ever-evolving landscape of the tech industry.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;