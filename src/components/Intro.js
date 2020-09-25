import React,{useEffect} from 'react';
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import '../css/Intro.scss'


function Intro(){

    useEffect(() => {
        document.querySelectorAll(".navi___link").forEach((v)=>v.classList.remove('active'))
        document.querySelector(".navi___link.intro_link").classList.add('active');
    }, [])

    return(
        <div className="intro_page">
            <div className="btn_area">
                <a href="tel:011111111">
                    <Icon icon={IconNames.PHONE} iconSize={Icon.SIZE_STANDARD} intent={Intent.SUCCESS} />
                    <div>신랑에게 전화하기</div>
                </a>
                <a href="tel:011111111">
                    <Icon icon={IconNames.PHONE} iconSize={Icon.SIZE_STANDARD} intent={Intent.SUCCESS} />
                    <div>신부에게 전화하기</div>
                </a>
                <a href="sms:011111111">
                    <Icon icon={IconNames.ENVELOPE} iconSize={Icon.SIZE_STANDARD} intent={Intent.SUCCESS} />
                    <div>신랑에게 문자하기</div>
                </a>
                <a href="sms:011111111">
                    <Icon icon={IconNames.ENVELOPE} iconSize={Icon.SIZE_STANDARD} intent={Intent.SUCCESS} />
                    <div>신부에게 문자하기</div>
                </a>
            </div>
        </div>
    )
}

export default Intro;