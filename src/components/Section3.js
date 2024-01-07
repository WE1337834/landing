import React from "react";
import First_meeting from '../images/First_meeting.png';
import '../css/section3.css';
import Learning_process from '../images/Learning_process.png';
import Final_tasks from '../images/Final_tasks.png';
import '../css/section3.css';

class Section3 extends React.Component{
    render(){
        return(
            <section className="Section3">
                <header className="Section3-heading">
                    <h1 className="Section3-h1">Этапы обучения</h1>
                </header>
                <article className="Section3-info">
                    <div className="Section3-stagesOfTraining">
                        <span className="Section3-title">
                            Первое знакомство
                        </span>
                        <img src={First_meeting}  className="Section3-picture"/>
                        <p className="Section3-description">На первом бесплатном занятии, ученик знакомится с педагогом, проходит диагностику знаний, разбирает задания, закрепляет на практике. Выбирают материал для изучения.</p>
                    </div>
                
                    <div className="Section3-stagesOfTraining">
                        <span className="Section3-title">
                            Процесс обучения
                        </span>
                        <img src={Learning_process}  className="Section3-picture"/>
                        <p className="Section3-description">Занятия строятся на системном обучении. В начале урока идет проверка знаний, далее новый материал и подведение итогов.</p>
                    </div>
                
                    <div className="Section3-stagesOfTraining">
                        <span className="Section3-title">
                            Итоговые задания
                        </span>
                        <img src={Final_tasks}  className="Section3-picture"/>
                        <p className="Section3-description">Ученик решает типовые тесты, разбирают вместе с педагогом задания в соответствии с уровнем знаний и проводят симуляцию экзамена.</p>
                    </div>
                </article>

            </section>
        )
    }
}

export default Section3;