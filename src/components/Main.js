import React from 'react';
import '../css/Main.scss';
import mainImg from '../images/main.jpg';
import Intro from './Intro';

function Main(){
    return (
        <>
            <div className="main_page">
                <img className="main___img" src={mainImg} alt="main_image"/>
                <div className="main_plan">
                    김ㅇㅇ ❤ 박ㅇㅇ<br/><br/>
                    202X.XX.XX<br/>
                    XXXX웨딩홀
                </div>
                
            </div>
            <Intro/>
        </>
    )
}

export default Main;