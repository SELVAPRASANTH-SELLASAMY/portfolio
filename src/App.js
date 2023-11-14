import Navbar from "./Navbar";
import Home from './Home';
import About from './About';
import Projects from "./Projects";
import Resume from './Resume';
import Contact from "./Contact";
import './css/App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>SP Tech</title>
      </Helmet>
      <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path="" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="resume" element={<Resume/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
