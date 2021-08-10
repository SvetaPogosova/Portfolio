import "./AboutMe.css"

export const AboutMe = () => {
    return <div className='aboutMe'>
        <div>
            <h1>О себе</h1>
            <p>
                Недавно начала изучение веб-разработки, хочу развиваться в этом направлении и получить интересный опыт
                разработки различных проектов.
            </p>
            <p>
                На данный момент, основной упор в обучении – React.js. В дальнейшем, интересно попробовать Angular,
                Node.js и познакомится с базами данных.
            </p>
        </div>
        <div className="info">
            <div>
                <h2>Образование</h2>
                <ul>
                    <li>2015 - 2020 Запорожский национальный университет</li>
                    <li>Специальность: Теплоэнергетика</li>
                </ul>
            </div>
            <div>
                <h2>Языки</h2>
                <ul>
                    <li>Украинский – родной</li>
                    <li>Русский – родной</li>
                    <li>Английский – pre-intermediate</li>
                </ul>
            </div>
            <div>
                <h2>Soft skills</h2>
                <ul>
                    <li>Работа в команде</li>
                    <li>Нацеленность на результат</li>
                    <li>Стрессоустойчивость</li>
                    <li>Желание развиваться</li>
                    <li>Поиск и анализ информации</li>
                </ul>
            </div>
        </div>
    </div>
}