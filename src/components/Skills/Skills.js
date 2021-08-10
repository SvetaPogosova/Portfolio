import HTML5 from "../../img/HTML5_logo.png"
import CSS3 from "../../img/CSS3_logo.png"
import JS from "../../img/JS_logo.png"
import React from "../../img/React_logo.png"
import Redux from "../../img/Redux_logo.png"
import Sass from "../../img/Sass_logo.png"
import "./Skills.css"
import {icons} from "react-icons";

export const Skills = () => {
    return <div className={'skills'}>
        <h1>Skills</h1>
        <div className={'icons'}>
            <div><img className={'items'} src={CSS3} alt={'CSS3'}/></div>
            <div><img className={'items'} src={HTML5} alt={'HTML5'}/></div>
            <div><img className={'items'} src={JS} alt={'JS'}/></div>
            <div><img className={'items'} src={React} alt={'React'}/></div>
            <div><img className={'items'} src={Redux} alt={'Redux'}/></div>
            <div><img className={'items'} src={Sass} alt={'Sass'}/></div>
        </div>
    </div>

};