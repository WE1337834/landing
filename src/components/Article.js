import React from "react";
import '../css/article.css';

class Article extends React.Component{
    render(){
        return(
            <article className="Article">
                <span className="Article-reviews1">98%</span>
                <p className="Article-reviews2">положительных отзывов <br />от родителей после первого урока</p>
                <button className="Article-btn_start">Начать с беплатного урока</button>
            </article>
        )
    }
}

export default Article;