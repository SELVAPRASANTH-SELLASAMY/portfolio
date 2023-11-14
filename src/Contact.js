import git from './assets/github.svg';
import insta from './assets/instagram.svg';
import linkedin from './assets/linkedin.svg';
import EMail from './assets/mail.svg';
import { useState } from 'react';
import './css/contact.css';
import { useRef } from 'react';
import Loader from "./Loader";
const Contact = () => {
    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');
    const [spin,setSpin] = useState(false);

    const nameWarn = useRef();
    const mailWarn = useRef();
    const phnWarn = useRef();
    const messageWarn = useRef();
    const resMsg = useRef();

    var response = {
        Name:'',
        phoneNumber:'',
        email:'',
        Message:''
    }

    const phoneNumberValidation = (p) => {
        if(phone!==''){
            if(p.length !== 10){
                phnWarn.current.innerText = 'Invalid phone number!'
                return false
            }
        }
        return true
    }

    const validateEmail = (ma) => {
        let point = ma.search(/./)
        let anchor = ma.search(/@/)
        let upper = ma.search(/[A-Z]/)
        let lower = ma.search(/[a-z]/)
        if(point !== -1 && anchor !== -1 && upper === -1 && lower !== -1){
            return true
        }
        if(ma !== ''){
            mailWarn.current.innerText = 'Invalid email address!'
        }
        return false
    }

    const validate = (e) => {
        e.preventDefault();
        setSpin(true)
        resMsg.current.style.visibility = 'hidden';
        phnWarn.current.innerText = 'This field is required!'
        mailWarn.current.innerText = 'This field is required!'
        nameWarn.current.style.visibility = name === '' ? 'visible' : 'hidden';
        mailWarn.current.style.visibility = mail === '' || validateEmail(mail) === false ? 'visible' : 'hidden';
        phnWarn.current.style.visibility = phone === '' || phoneNumberValidation(phone) === false ? 'visible' : 'hidden';
        messageWarn.current.style.visibility = message === '' ? 'visible' : 'hidden';
        validateEmail(mail)
        if(name !== '' && mail !== '' && phone !== '' && message !== '' && phoneNumberValidation(phone) !== false && validateEmail(mail) !== false){saveAsJson()}
        if(name === ''){
            setSpin(false)
        }
        if(validateEmail(mail) === false){
            setSpin(false)
        }
        if(phoneNumberValidation(phone) === false){
            setSpin(false)
        }
        if(mail === ''){
            setSpin(false)
        }
        if(phone === ''){
            setSpin(false)
        }
        if(message === ''){
            setSpin(false)
        }
    }
    const saveAsJson = () => {
        response.Name = name;
        response.phoneNumber = phone;
        response.email = mail;
        response.Message = message;
        SubmitResponse();
    }
    const SubmitResponse = () => {
        fetch("https://zany-gray-cricket-cap.cyclic.app/register",{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(response)
        })
        .then((res)=>res.json())
        .then(()=>{
            resMsg.current.innerHTML = "Thanks! We'll get you back shortly.";
            resMsg.current.style.color = 'greenyellow';
            resMsg.current.style.visibility='visible';
            setSpin(false);
        })
        .catch((error)=>{
            resMsg.current.innerHTML = "Something went wrong!";
            resMsg.current.style.color = 'red';
            resMsg.current.style.visibility='visible';
            console.log(error)
            setSpin(false);
        })
    }

    const visit = (url) => {
        window.open(url, '_blank', 'noreferrer');
    }
    return(
        <div className="contact-container">
            <div className="contact-form">
                <p ref={resMsg} className="response-message">Thanks! We'll get you back shortly.</p>
                <h1>Let's talk a project together</h1>
                <form noValidate onSubmit={(e)=>validate(e)}>
                    <div className="input">
                        <input onChange={(e)=>setName(e.target.value)} type="text" required id='fullname' name='fullname' autoComplete='off'/>
                        <label htmlFor="fullname">FullName</label>
                        <div ref={nameWarn} className="name-warn">This field is required!</div>
                    </div>
                    <div className="input">
                        <input onChange={(e)=>setMail(e.target.value)} type="text" required id='email' name='email' autoComplete='off'/>
                        <label htmlFor="email">Email</label>
                        <div ref={mailWarn} className="mail-warn">This field is required!</div>
                    </div>
                    <div className="input">
                        <input onChange={(e)=>setPhone(e.target.value)} type="number" required id='phone-number' name='phone-number' autoComplete='off'/>
                        <label htmlFor="phone-number">Phone Number</label>
                        <div ref={phnWarn} className="phn-warn">This field is required!</div>
                    </div>
                    <div className="input">
                        <textarea onChange={(e)=>setMessage(e.target.value)} required name="message" id="message" cols="30" rows="10"></textarea>
                        <label htmlFor="message">Message</label>
                        <div ref={messageWarn} className="message-warn">This field is required!</div>
                    </div>
                    <button type='submit' onClick={()=>{setSpin(true)}}>Submit</button>
                </form>
                <div className="social-media">
                    <div onClick={()=>visit("https://github.com/SELVAPRASANTH-SELLASAMY")} className="icons">
                        <img src={git} alt="github" />
                        <p className="media-name">Github</p>
                    </div>
                    <div onClick={()=>visit("https://instagram.com/prasanth_sellasamy?igshid=OGQ5ZDc2ODk2ZA==")} className="icons">
                        <img src={insta} alt="instagram" />
                        <p className="media-name">Instagram</p>
                    </div>
                    <div onClick={()=>visit("https://www.linkedin.com/in/selvaprasanth-s-371898248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")} className="icons">
                        <img src={linkedin} alt="LinkedIn" />
                        <p className="media-name">Linkedin</p>
                    </div>
                    <div onClick={()=>visit("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRttNmKsrTfHDsCqksGPFJFxmdjRPpFzSdffJzsXkKJchsjWPSRdcNNGPsbBlLCDvDdGbgQ")} className="icons">
                        <img src={EMail} alt="Email" />
                        <p className="media-name">Email</p>
                    </div>
                </div>
            </div>
            {spin ? <Loader/> : null}
        </div>
    )
}
export default Contact;