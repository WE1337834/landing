import React from "react";
import greeting from '../../images/greeting.png';
import '../../css/pc/section1.css';

class Section1 extends React.Component{
    render(){
        return(
            <section className="Section1-greeting">
                <div className="Section1-info">
                    <div className="Section1-leftPart">
                        <span className="Section1-nameSchool">#Онлайн школа «Квадрат»</span>

                        <h1 className="Section1-h1"><span className="Section1-span">Подготовим ученика к экзамену <b className="Section1-b">на 100%</b></span></h1>

                        <i className="Section1-check">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58333 19.3232C14.8762 19.3232 19.1667 14.9977 19.1667 9.66159C19.1667 4.32549 14.8762 0 9.58333 0C4.29046 0 0 4.32549 0 9.66159C0 14.9977 4.29046 19.3232 9.58333 19.3232ZM14.7305 6.6037C14.7754 6.55713 14.8104 6.50194 14.8337 6.44141C14.8569 6.38089 14.8677 6.31627 14.8656 6.25141C14.8635 6.18655 14.8485 6.12279 14.8214 6.06392C14.7943 6.00505 14.7557 5.95229 14.708 5.90879C14.6602 5.86528 14.6042 5.83192 14.5434 5.8107C14.4826 5.78948 14.4181 5.78083 14.3539 5.78527C14.2897 5.78971 14.227 5.80715 14.1697 5.83655C14.1123 5.86595 14.0614 5.9067 14.0199 5.95637L8.28 12.3509L5.12229 9.31184C5.03041 9.22331 4.90741 9.1752 4.78034 9.1781C4.65328 9.181 4.53256 9.23467 4.44475 9.3273C4.35694 9.41993 4.30922 9.54393 4.31209 9.67204C4.31497 9.80014 4.3682 9.92184 4.46008 10.0104L7.97429 13.3919L8.33031 13.7349L8.66046 13.3668L14.7305 6.6037Z" fill="#C6FF69"/>
                            </svg>
                            <span className="Section1-plus">Онлайн занятия</span>
                        </i> 
                        <br/>

                        <i className="Section1-check">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58333 19.3232C14.8762 19.3232 19.1667 14.9977 19.1667 9.66159C19.1667 4.32549 14.8762 0 9.58333 0C4.29046 0 0 4.32549 0 9.66159C0 14.9977 4.29046 19.3232 9.58333 19.3232ZM14.7305 6.6037C14.7754 6.55713 14.8104 6.50194 14.8337 6.44141C14.8569 6.38089 14.8677 6.31627 14.8656 6.25141C14.8635 6.18655 14.8485 6.12279 14.8214 6.06392C14.7943 6.00505 14.7557 5.95229 14.708 5.90879C14.6602 5.86528 14.6042 5.83192 14.5434 5.8107C14.4826 5.78948 14.4181 5.78083 14.3539 5.78527C14.2897 5.78971 14.227 5.80715 14.1697 5.83655C14.1123 5.86595 14.0614 5.9067 14.0199 5.95637L8.28 12.3509L5.12229 9.31184C5.03041 9.22331 4.90741 9.1752 4.78034 9.1781C4.65328 9.181 4.53256 9.23467 4.44475 9.3273C4.35694 9.41993 4.30922 9.54393 4.31209 9.67204C4.31497 9.80014 4.3682 9.92184 4.46008 10.0104L7.97429 13.3919L8.33031 13.7349L8.66046 13.3668L14.7305 6.6037Z" fill="#C6FF69"/>
                            </svg>
                            <span className="Section1-plus">Индивидуальный формат</span></i>
                        <br/>

                        <i className="Section1-check">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58333 19.3232C14.8762 19.3232 19.1667 14.9977 19.1667 9.66159C19.1667 4.32549 14.8762 0 9.58333 0C4.29046 0 0 4.32549 0 9.66159C0 14.9977 4.29046 19.3232 9.58333 19.3232ZM14.7305 6.6037C14.7754 6.55713 14.8104 6.50194 14.8337 6.44141C14.8569 6.38089 14.8677 6.31627 14.8656 6.25141C14.8635 6.18655 14.8485 6.12279 14.8214 6.06392C14.7943 6.00505 14.7557 5.95229 14.708 5.90879C14.6602 5.86528 14.6042 5.83192 14.5434 5.8107C14.4826 5.78948 14.4181 5.78083 14.3539 5.78527C14.2897 5.78971 14.227 5.80715 14.1697 5.83655C14.1123 5.86595 14.0614 5.9067 14.0199 5.95637L8.28 12.3509L5.12229 9.31184C5.03041 9.22331 4.90741 9.1752 4.78034 9.1781C4.65328 9.181 4.53256 9.23467 4.44475 9.3273C4.35694 9.41993 4.30922 9.54393 4.31209 9.67204C4.31497 9.80014 4.3682 9.92184 4.46008 10.0104L7.97429 13.3919L8.33031 13.7349L8.66046 13.3668L14.7305 6.6037Z" fill="#C6FF69"/>
                            </svg>
                            <span className="Section1-plus">Квалифицированные педагоги</span></i>
                        <br/>

                        <i className="Section1-check">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58333 19.3232C14.8762 19.3232 19.1667 14.9977 19.1667 9.66159C19.1667 4.32549 14.8762 0 9.58333 0C4.29046 0 0 4.32549 0 9.66159C0 14.9977 4.29046 19.3232 9.58333 19.3232ZM14.7305 6.6037C14.7754 6.55713 14.8104 6.50194 14.8337 6.44141C14.8569 6.38089 14.8677 6.31627 14.8656 6.25141C14.8635 6.18655 14.8485 6.12279 14.8214 6.06392C14.7943 6.00505 14.7557 5.95229 14.708 5.90879C14.6602 5.86528 14.6042 5.83192 14.5434 5.8107C14.4826 5.78948 14.4181 5.78083 14.3539 5.78527C14.2897 5.78971 14.227 5.80715 14.1697 5.83655C14.1123 5.86595 14.0614 5.9067 14.0199 5.95637L8.28 12.3509L5.12229 9.31184C5.03041 9.22331 4.90741 9.1752 4.78034 9.1781C4.65328 9.181 4.53256 9.23467 4.44475 9.3273C4.35694 9.41993 4.30922 9.54393 4.31209 9.67204C4.31497 9.80014 4.3682 9.92184 4.46008 10.0104L7.97429 13.3919L8.33031 13.7349L8.66046 13.3668L14.7305 6.6037Z" fill="#C6FF69"/>
                            </svg>
                            <span className="Section1-plus">Гарантия сдачи экзамена по договору</span></i>
                        <br/>

                        <button className="Section1-singUp">Записаться на пробный урок</button>
                    </div>
                    
                    <div className="Section1-rightPart">
                        <img className='Section1-imgGreeting' alt='' src={greeting}/>
                    </div>

                        
                </div>
            </section>
        )
    }
}
export default Section1;