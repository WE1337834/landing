import React from "react";
import logo from '../images/logo.png'
import '../css/header.css'

class Header extends React.Component{
    render() {
        return(
            <header>
                <div>
                    <picture>
                        <img src={logo} className="logo" alt=""/>
                    </picture>
                    <nav className="headerNav">
                        <a href="../public/index.html">Пробный урок</a>
                        <a href="../public/index.html">Обучение</a>
                        <a href="../public/index.html">Преподаватели</a>
                    </nav>

                    <div className="contact">
                        <span className="tel">+7(931) 593-93-11</span>
                        <label className="whatsapp">Whatsapp</label>
                    </div>
                </div>         
            </header>
        )
    }
}
export default Header;