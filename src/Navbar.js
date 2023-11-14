import './css/navbar.css';
import devsymbol from './assets/dev.svg';
import hamburger from './assets/hamburger.svg';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
const Navbar = () =>{
    const [currentPage,setCurrentPage] = useState("/");
    const ham = useRef();
    const menu = useRef();
    const nav = useNavigate();
    const locate = useLocation();
    useEffect(()=>{
        setCurrentPage(locate.pathname);
    },[locate.pathname])
    useEffect(()=>{
        ham.current.addEventListener('click', ()=>{
            menu.current.classList.toggle('toggleNavbar');
        })
    })
    return(
        <>
        <div className="Navbar-container">
            <div className="developer">
                <img src={devsymbol} alt="dev" className="dev-symbol" />
                <h1>Developer</h1> 
                <div className='point'></div> 
                <p>Web, Full Stack</p>
            </div>
            <div ref={ham} className="hamburger">
                <img src={hamburger} alt="Menu" />
            </div>
            <nav ref={menu}>
                <ul>
                    <li style={{'--i':1}} className={`${currentPage === "/" ? 'active' : null}`} onClick={()=>nav("/")}>Home</li>
                    <li style={{'--i':2}} className={`${currentPage === "/about" ? 'active' : null}`} onClick={()=>nav("/about")}>About</li>
                    <li style={{'--i':3}} className={`${currentPage === "/projects" ? 'active' : null}`} onClick={()=>nav("/projects")}>Projects</li>
                    <li style={{'--i':4}} className={`${currentPage === "/resume" ? 'active' : null}`} onClick={()=>nav("/resume")}>Resume</li>
                    <li style={{'--i':5}} className={`${currentPage === "/contact" ? 'active' : null}`} onClick={()=>nav("/contact")}>Contact</li>
                </ul>
            </nav>
        </div>
        <Outlet/>
        </>
    );
}
export default Navbar;