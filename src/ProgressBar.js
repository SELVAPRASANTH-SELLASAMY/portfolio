import { useEffect, useRef } from 'react';
import './css/progressbar.css';
const ProgressBar = (arr) =>{
    const percentNum = useRef();
    const progress = useRef();
    var time1;
    const progressAnimation = () =>{
        var i = 0;
        var pro = 0;
        const t1 = setInterval(()=>{
            time1 = t1;
            percentNum.current.innerHTML = i + "%";
            // progress.current.style.background = `conic-gradient(rgb(0, 123, 255) ${3.6*pro}deg,rgba(0, 0, 0, 0.775) 0deg)`
            progress.current.style.strokeDashoffset = `${(100 - pro) * 2.826}`;
            ++i;
            ++pro;
            if(i === arr.props.percent + 1){
                clearInterval(t1);
            }
        },50)
    }
    useEffect(()=>{
        progressAnimation();
    })
    useEffect(()=>{
        return ()=>{
            clearInterval(time1)
        }
    },[time1])
    return(
        <div className="progressbar-container">
            <div className="rectangle-container">
                <div className="wrap-progress">
                    {/* <div ref={progress} className="circle">
                        <div ref={percentNum} className="percent"></div>
                    </div> */}
                    <svg viewBox='0 0 100 100' className='circle'>
                        <circle className='static-circle' cx={"50%"} cy={"50%"} r={45}></circle>
                        <circle ref={progress} className='dynamic-circle' cx={"50%"} cy={"50%"} r={45}></circle>
                        <text ref={percentNum} x={"30%"} y={"58%"}></text>
                    </svg>
                    <div className="inner-texts">
                        <div className="skillname">{arr.props.progName}</div>
                        <div className="skill-quote">
                            {arr.props.quotes}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProgressBar;