import React,{useEffect} from 'react';
import '../css/Main.scss';
import mainImg from '../images/main.jpg';

function Main(){

    useEffect(() => {
        document.querySelectorAll(".navi___link").forEach((v)=>v.classList.remove('active'))
        document.querySelector(".navi___link.main_link").classList.add('active');
    }, [])

    return (
        <>
            <div className="main_page">
                <h1>우리 결혼합니다</h1>
                <img className="main___img" src={mainImg} alt="main_image"/>
                <div className="main_plan">
                    <h3>김ㅇㅇ • 박ㅇㅇ</h3>
                    <h5>
                        202X.XX.XX 토요일 오후 1시
                        <br/>
                        바른컨벤션센터 1층 그랜드홀
                    </h5>
                </div>
            </div>
            
        </>
    )
}

export default Main;