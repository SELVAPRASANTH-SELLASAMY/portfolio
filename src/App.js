import Navbar from "./Navbar";
import Home from './Home';
import About from './About';
import Projects from "./Projects";
import Resume from './Resume';
import Contact from "./Contact";
import './css/App.css';
import { HashRouter,Routes,Route } from "react-router-dom";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>SP Tech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0"/>
      </Helmet>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="resume" element={<Resume/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
