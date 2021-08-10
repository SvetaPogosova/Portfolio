import {NavLink} from "react-router-dom"
import "./navbar.css"
import {FiMenu, GiBattleGear, ImHome3, VscSmiley} from "react-icons/all";

export const Navbar = ({navbarActive, setNavbarActive}) => {

    return (
        <div>
            <FiMenu className="nav-btn"
                    onClick={() => setNavbarActive(!navbarActive)}/>
            <div className={navbarActive ? 'menu active ' : 'menu'}
                 onClick={() => {
                     setNavbarActive(false)
                 }}>
                <div>
                    <ul>
                        <li><NavLink exact to="/"><ImHome3 title='Home'/></NavLink></li>
                        <li><NavLink to="/about"><VscSmiley title='About Me'/></NavLink></li>
                        <li><NavLink to="/skills"><GiBattleGear title='Skills'/></NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}