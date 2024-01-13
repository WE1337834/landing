import React from "react";
import '../../css/pc/section2.css'

class Section2 extends React.Component{
    render(){
        return(
            <section className="Section2-info">
                
                <div className="Section2-block">
                    <i className="fa fa-graduation-cap Section2-icon">
                        <span className="Section2-info-project">1900+</span>
                    </i>

                    <span className="Section2-description">Обучили учеников и успешно сдали экзамен</span>
                </div>

                <div className="Section2-block">
                    <i className="fa fa-clock-o Section2-icon">
                        <span className="Section2-info-project">12 лет</span>
                    </i>

                    <span className="Section2-description">Мы учим и развиваем наших учеников</span>
                </div>
                <div className="Section2-block">
                    <i className="fa fa-star-o Section2-icon">
                        <span className="Section2-info-project">4,9 оценка</span>
                        </i>

                    <span className="Section2-description">Наша средняя оценка от родителей и учеников</span>
                </div>

            </section>
        )
    }
}
export default Section2;