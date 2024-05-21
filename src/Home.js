import { useEffect, useRef, useState } from 'react';
import './css/home.css';
import Carousels from './Carousels';
const Home = () =>{
    const [FDAnimation,setFDAnimation] = useState(true);
    const [T1,setT1] = useState(null);

    const FDdisplayarea = useRef();
    const cursorPlay = useRef();

    const tech = ['FullStack Developer','Frontend developer'];
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
                if(te===1){
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
    const contactMe = () => {
        window.open("https://wa.me/+919003413727",'_blank','noreferrer');
    }
    useEffect(()=>{
        FDAnimate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[FDAnimation])
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
                <button onClick={()=>contactMe()} type='submit'>Contact &gt;</button>
            </div>
            <div className="carousel-area">
                <Carousels/>
            </div>
        </div>
    )
}
export default Home;