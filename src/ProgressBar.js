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
            percentNum.current.innerText = i + "%";
            progress.current.style.background = `conic-gradient(rgb(0, 123, 255) ${3.6*pro}deg,rgba(0, 0, 0, 0.775) 0deg)`
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
                    <div ref={progress} className="circle">
                        <div ref={percentNum} className="percent"></div>
                    </div>
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