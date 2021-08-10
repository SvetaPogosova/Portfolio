import {Home} from "./components/HomePage/Home"
import {AboutMe} from "./components/AboutMe/AboutMe"
import {Skills} from "./components/Skills/Skills"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Navbar} from "./components/Navbar/Navbar"
import "./App.css"
import {useState} from "react";


function App() {
    const [navbarActive, setNavbarActive] = useState(false)
    return (
        <>
            <Navbar navbarActive={navbarActive} setNavbarActive={setNavbarActive}/>
            <div className='container'>
                <div className={navbarActive ? 'blur' : null}>
                        <Route exact path="/"
                               render={() => <Home />}/>
                        <Route exact path="/about"
                               render={() => <AboutMe />}/>
                        <Route exact path="/skills"
                               render={() => <Skills />}/>
                </div>
            </div>
        </>
    )
}

export default App