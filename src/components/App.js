import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import logo from '../images/logo.png'

class App extends React.Component{

    render(){
        return(
            <div>
                <Header src={logo} />
                <Main />
            </div>
        )
    }

}
export default App;