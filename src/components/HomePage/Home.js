import {AiFillGithub, AiFillLinkedin, FaTelegram} from "react-icons/all";
import "./Home.css"

export const Home = () => {
    return (
        <div className={'home_container'}>
            <h1>Погосова Светлана</h1>
            <h2>Фронтенд-Разработчик</h2>
            <span>
                    <a href="https://github.com/jintsuu/jintsuu.github.io/tree/sources"
                       target="_blank"
                       rel="noopener noreferrer">
                         <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/jintsuu/jintsuu.github.io/tree/sources"
                       target="_blank"
                       rel="noopener noreferrer">
                         <AiFillGithub/>
                    </a>
                    <a href="https://t.me/PogosovaSvetlana"
                       target="_blank"
                       rel="noopener noreferrer">
                         <FaTelegram/>
                     </a>
                 </span>
        </div>
    )
}