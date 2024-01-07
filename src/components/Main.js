import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Article from "./Article";

class Main extends React.Component{
    render(){
        return(
            <main>
                <div className="Main">
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Article />
                </div>
                <Section4 />
            </main>
        )
    }
}



export default Main;