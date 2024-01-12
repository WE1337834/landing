import React from "react";
import Trial_classes from '../images/Trial_classes.png'
import '../css/lesson.css'
class Lesson extends React.Component{
    render(){
        return(
            <div className="Lesson">
                <div className="Lesson-leftPart">
                    <h2 className="Lesson-h2">
                        Запишитесь 
                        на бесплатное пробное
                        занятие прямо сейчас!
                    </h2>
                    <form className="Lesson-form">
                        <input type="text" className="Lesson-fi"   placeholder="Имя ученика" name="Student_name" id="Lesson-Student_name" />
                        <input type="text" className="Lesson-fi"   placeholder="Имя родителя" name="Parent_name" id="Lesson-Parent_name" />
                        <input type="tel" className="Lesson-fi"   placeholder="+7 (999) 999-99-99" name="tel" id="Lesson-tel" />
                        <input type="email" className="Lesson-fi"   placeholder="Email (необязательно)" name="email" id="Lesson-email" />
                        <input type="submit" className="Lesson-btn"  value="Записаться на пробный урок" />
                    </form>
                    <p className="Lesson-politics">
                        Нажимая на кнопку Записаться, вы соглашаетесь <br/>
                        <a href='#' className="Lesson-mark"> с политикой обработки персональных данных</a>
                    </p>
                </div>
                <div className="Lesson-rightPart">
                    <img src={Trial_classes} alt='' className="Lesson-img"/>
                </div>
            </div>
        )
    }
}

export default Lesson;