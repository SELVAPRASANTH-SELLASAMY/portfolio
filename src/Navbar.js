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
                    <li className={`${currentPage === "/" ? 'active' : null}`} onClick={()=>nav("/")}>Home</li>
                    <li className={`${currentPage === "/about" ? 'active' : null}`} onClick={()=>nav("/about")}>About</li>
                    <li className={`${currentPage === "/projects" ? 'active' : null}`} onClick={()=>nav("/projects")}>Projects</li>
                    <li className={`${currentPage === "/resume" ? 'active' : null}`} onClick={()=>nav("/resume")}>Resume</li>
                    <li className={`${currentPage === "/contact" ? 'active' : null}`} onClick={()=>nav("/contact")}>Contact</li>
                </ul>
            </nav>
        </div>
        <Outlet/>
        </>
    );
}
export default Navbar;