import React from "react";
import logo from '../images/logo.png'
import '../css/footer.css'
class Footer extends React.Component{
    render(){
        return(
            <footer className="Footer">
                <div className="Footer-block">
                    <div className="Footer-contact">
                        <img src={logo} className="Footer-logo" alt='' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="17" viewBox="0 0 59 17" fill="none">
                            <path d="M57.3769 0.191328L39.6578 7.05953C38.9448 7.37938 38.7036 8.01988 39.4855 8.3675L44.0312 9.81957L55.0221 2.99184C55.6222 2.5632 56.2366 2.6775 55.7079 3.14902L46.2682 11.7402L45.9717 15.376C46.2463 15.9374 46.7492 15.94 47.07 15.661L49.6816 13.177L54.1545 16.5437C55.1933 17.1619 55.7586 16.763 55.9821 15.6299L58.9159 1.66621C59.2205 0.271484 58.7011 -0.343047 57.3769 0.191328Z" fill="index.htmlC6FF69"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.45 1.948C23.616 1.402 23.45 1 22.655 1H20.03C19.362 1 19.054 1.347 18.887 1.73C18.887 1.73 17.552 4.926 15.661 7.002C15.049 7.604 14.771 7.795 14.437 7.795C14.27 7.795 14.019 7.604 14.019 7.057V1.948C14.019 1.292 13.835 1 13.279 1H9.151C8.734 1 8.483 1.304 8.483 1.593C8.483 2.214 9.429 2.358 9.526 4.106V7.904C9.526 8.737 9.373 8.888 9.039 8.888C8.149 8.888 5.984 5.677 4.699 2.003C4.45 1.288 4.198 1 3.527 1H0.9C0.15 1 0 1.347 0 1.73C0 2.412 0.89 5.8 4.145 10.281C6.315 13.341 9.37 15 12.153 15C13.822 15 14.028 14.632 14.028 13.997V11.684C14.028 10.947 14.186 10.8 14.715 10.8C15.105 10.8 15.772 10.992 17.33 12.467C19.11 14.216 19.403 15 20.405 15H23.03C23.78 15 24.156 14.632 23.94 13.904C23.702 13.18 22.852 12.129 21.725 10.882C21.113 10.172 20.195 9.407 19.916 9.024C19.527 8.533 19.638 8.314 19.916 7.877C19.916 7.877 23.116 3.451 23.449 1.948H23.45Z" fill="index.htmlC6FF69"/>
                        </svg>
                    </div>

                    <div className="Footer-main_link">
                        <span className="column">
                            <a href="index.html" className="Footer-link">Обучение</a>
                            <a href="index.html" className="Footer-link">Преподаватели</a>
                        </span>
                        <span className="column">
                            <a href="index.html" className="Footer-link">Пробный урок</a>
                            <a href="index.html" className="Footer-link">Контакты</a>
                        </span>
                         
                        <span className="column">
                            <a href="index.html" className="Footer-link">Отзывы</a>
                        </span>
                    </div>

                    <div className="Footer-info">
                        <a href="index.html" className="Privacy_Policy">Политика конфиденциальности</a>
                        <a href="index.html" className="Copyright">© 2023 Квадрат</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;