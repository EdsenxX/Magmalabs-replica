import React,{Component} from 'react';

import Menu from '../components/Menu';
import './styles/Home.scss';

class Home extends Component{
    render(){
        return(
            <div className="Home">
                <Menu/>
                <div className="Home__Hero">
                    <div className="Home__Hero__container">
                        <h1>MagmaLabs builds tailored software solutions to help companies execute their vision. </h1>
                        <p>With loyal teams achieving quick turn-around. </p>
                        <ul>
                            <li>Ruby on Rails</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Solidus</li>
                            <li>UX desing</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;