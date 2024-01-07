import React from "react";
import '../css/section4.css'
class Section4 extends React.Component{
    render(){
        return(
            <section className="Section4">
                <h1 className="Section4-h1">Наши преподаватели</h1>
                <p className="Section4-text">Мы проводим строгий отбор на роль преподавателя <br/> и приглашаем на работу только лучших специалистов</p>

                <div className="Section4-block">
                    <div className="Section4-picture_teacher"></div>

                    <div className="Section4-description_teacher_1">
                        <h2 className="Section4-h2_1"><span className="Section4-h2_text">и еще</span> <br/> <b className="Section4-b">30+</b></h2>
                        <p className="Section4-block_p_1">талантливых преподавателей с опытом работы с детьми и подростками</p>
                    </div>

                    <div className="Section4-description_teacher_2">
                        <h2 className="Section4-h2_1">Учитывают детскую психологию</h2>
                        <p className="Section4-block_p_2">Подстроим программу курса под интересы ученика. Установим эмоциональный контакт с учеником в первые минуты урока.</p>
                    </div>

                    <div className="Section4-description_teacher_3">
                        <h2 className="Section4-h2_1">Молодые и талантливые</h2>
                        <p className="Section4-block_p_2">Преподаватели легко объяснят, поддержат и вдохновят развиваться дальше через личный пример.</p>
                    </div>

                    <div className="Section4-description_teacher_4">
                        <h2 className="Section4-h2_2">12 лет</h2>
                        <p className="Section4-block_p_2">учим и развиваем наших учеников. Имеем большой опыт в детском образовании </p>
                    </div>

                    <div className="Section4-description_teacher_5">
                        <h2 className="Section4-h2_2">1900+</h2>
                        <p className="Section4-block_p_2">учеников прошли через наши занятия и остались довольны</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Section4;