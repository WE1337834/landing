import React from "react";
import '../css/rewiews.css'
import Tatiana from '../images/Tatiana.png'
import Nadezhda from '../images/Nadezhda.png'
import Maksim from '../images/Maksim.png'
class Reviews extends React.Component{
    render(){
        return(
            <section className="Reviews">
                <h2 className="Reviews-h2">Отзывы</h2>
                <article className="Reviews-reviews">
                    <div className="Rewiews-block_side">
                        <h3 className="Reviews-title_name_side">
                            <img src={Tatiana} className="Rewiews-img"/>
                            <div className="Rewiews-name_and_job_title">
                                <div className="Rewiews-name_side">Татьяна</div>
                                <div className="Rewiews-job_title_side">Ученица</div>
                            </div>
                        </h3>
                        <div className="Rewiews-grade_1">
                            <div className="Rewiews-SVG">
                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="22" viewBox="0 0 82 22" fill="none">
                                    <path d="M42.7995 1.26221L45.9734 7.69223L53.0711 8.72966L47.9353 13.7319L49.1473 20.7988L42.7995 17.4605L36.4516 20.7988L37.6637 13.7319L32.5279 8.72966L39.6255 7.69223L42.7995 1.26221Z" fill="#FFA033" stroke="#FFA033" stroke-width="0.788679" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.5424 0.798828L14.7163 7.22885L21.814 8.26628L16.6782 13.2686L17.8902 20.3354L11.5424 16.9971L5.1945 20.3354L6.40655 13.2686L1.27075 8.26628L8.36843 7.22885L11.5424 0.798828Z" fill="#FFA033" stroke="#FFA033" stroke-width="0.788679" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M71.215 0.798828L74.3889 7.22885L81.4866 8.26628L76.3508 13.2686L77.5629 20.3354L71.215 16.9971L64.8672 20.3354L66.0792 13.2686L60.9434 8.26628L68.0411 7.22885L71.215 0.798828Z" fill="#FFA033" stroke="#FFA033" stroke-width="0.788679" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            
                            <p className="Rewiews-title_side">Отличный способ развивать свои музыкальные навыки</p>
                            <p className="Rewiews-text_side">Мне нравится, что школа использует современные методики обучения, которые делают уроки более интересными и увлекательными. Меня привлекло в этой школе, - это индивидуальный подход к ученикам. Преподаватели учитывают уровень знаний и способностей каждого ребенка, что позволяет эффективнее использовать время и достигать лучших результатов.</p>
                        </div>
                    </div>

                    <div className="Rewiews-block_center">
                        <h3 className="Reviews-title_name_center">
                            <img src={Nadezhda} className="Rewiews-img"/>
                            <div className="Rewiews-name_and_job_title">
                                <div className="Rewiews-name_center">Надежда</div>
                                <div className="Rewiews-job_title_center">Родитель</div>
                            </div>
                        </h3>
                        <div className="Rewiews-grade_2">
                            <div className="Rewiews-SVG">
                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="22" viewBox="0 0 82 22" fill="none">
                                    <path d="M42.7995 1.26221L45.9734 7.69223L53.0711 8.72966L47.9353 13.7319L49.1473 20.7988L42.7995 17.4605L36.4516 20.7988L37.6637 13.7319L32.5279 8.72966L39.6255 7.69223L42.7995 1.26221Z" fill="#FFA033" stroke="#FFA033" stroke-width="0.788679" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.5424 0.798828L14.7163 7.22885L21.814 8.26628L16.6782 13.2686L17.8902 20.3354L11.5424 16.9971L5.1945 20.3354L6.40655 13.2686L1.27075 8.26628L8.36843 7.22885L11.5424 0.798828Z" fill="#FFA033" stroke="#FFA033" stroke-width="0.788679" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M71.215 0.798828L74.3889 7.22885L81.4866 8.26628L76.3508 13.2686L77.5629 20.3354L71.215 16.9971L64.8672 20.3354L66.0792 13.2686L60.9434 8.26628L68.0411 7.22885L71.215 0.798828Z" fill="#FFA033" stroke="#FFA033" stroke-width="0.788679" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <p className="Rewiews-title_center">Это прекрасный опыт для моего сына</p>
                            <p className="Rewiews-text_center">Во-первых, мне понравилось то, что в этой онлайн-школе делается упор на индивидуальный подход к каждому ученику. Второе преимущество - это возможность выбора преподавателя. Мой сын занимается с профессиональным учителем математики, который находит индивидуальный подход и умеет заинтересовать ученика в предмете.</p>
                        </div>
                    </div>

                    <div className="Rewiews-block_side">
                        <h3 className="Reviews-title_name_side">
                            <img src={Maksim} className="Rewiews-img"/>
                            <div className="Rewiews-name_and_job_title">
                                <div className="Rewiews-name_side">Максим</div>
                                <div className="Rewiews-job_title_side">Ученик</div>
                            </div>
                        </h3>
                        <div className="Rewiews-grade_1">
                            <div className="Rewiews-SVG">
                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="22" viewBox="0 0 82 22" fill="none">
                                    <path d="M42.7995 1.26221L45.9734 7.69223L53.0711 8.72966L47.9353 13.7319L49.1473 20.7988L42.7995 17.4605L36.4516 20.7988L37.6637 13.7319L32.5279 8.72966L39.6255 7.69223L42.7995 1.26221Z" fill="#FFA033" stroke="#FFA033" stroke-width="0.788679" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.5424 0.798828L14.7163 7.22885L21.814 8.26628L16.6782 13.2686L17.8902 20.3354L11.5424 16.9971L5.1945 20.3354L6.40655 13.2686L1.27075 8.26628L8.36843 7.22885L11.5424 0.798828Z" fill="#FFA033" stroke="#FFA033" stroke-width="0.788679" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M71.215 0.798828L74.3889 7.22885L81.4866 8.26628L76.3508 13.2686L77.5629 20.3354L71.215 16.9971L64.8672 20.3354L66.0792 13.2686L60.9434 8.26628L68.0411 7.22885L71.215 0.798828Z" fill="#FFA033" stroke="#FFA033" stroke-width="0.788679" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <p className="Rewiews-title_side">Отличный способ развивать свои музыкальные навыки</p>
                            <p className="Rewiews-text_side">Я был обсолютный ноль в математике, особенно в тригонометрии, не мог понять, что и откуда берётся при решении... Но вот теперь, благодаря Виктории, которая объяснила мне все непонятные моменты доходчиво и ясно, я смотрю на всю эту тему и думаю про себя: «И вот эту фигню я не мог понять? В общем, тут и словосочетания "огромное спасибо" не хватит, чтобы выразить всю благодарность)</p>
                        </div>
                    </div>
                </article>
            </section>
        )
    }
}
export default Reviews;