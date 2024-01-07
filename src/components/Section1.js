import React from "react";
import greeting from '../images/greeting.png';
import '../css/section1.css';

class Section1 extends React.Component{
    render(){
        return(
            <section className="Section1-greeting">
                <div className="Section1-info">
                    <div className="Section1-leftPart">
                        <span className="Section1-nameSchool">#Онлайн школа «Квадрат»</span>

                        <h1 className="Section1-h1"><span className="Section1-span">Подготовим ученика к экзамену <b className="Section1-b">на 100%</b></span></h1>

                        <i className="fa fa-check-circle Section1-check"><span className="Section1-plus">Онлайн занятия</span></i> 
                        <br/>
                        <i className="fa fa-check-circle Section1-check"><span className="Section1-plus">Индивидуальный формат</span></i>
                        <br/>
                        <i className="fa fa-check-circle Section1-check"><span className="Section1-plus">Квалифицированные педагоги</span></i>
                        <br/>
                        <i className="fa fa-check-circle Section1-check"><span className="Section1-plus">Гарантия сдачи экзамена по договору</span></i>
                        <br/>

                        <button className="Section1-singUp">Записаться на пробный урок</button>
                    </div>
                    
                    <div className="Section1-rightPart">
                        <img className='Section1-imgGreeting' src={greeting}/>
                    </div>

                        
                </div>
            </section>
        )
    }
}
export default Section1;