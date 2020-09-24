import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import React from 'react';
import '../css/Intro.scss'


function Intro(){
    return(
        <div className="intro_page">
            <div className="btn_area">
                <a href="tel:011111111">
                    <Icon icon={IconNames.PHONE} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} />
                    <div>신랑에게 전화하기</div>
                </a>
                <a href="tel:011111111">
                    <Icon icon={IconNames.PHONE} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} />
                    <div>신부에게 전화하기</div>
                </a>
                <a href="sms:011111111">
                    <Icon icon={IconNames.PHONE} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} />
                    <div>신랑에게 문자하기</div>
                </a>
                <a href="sms:011111111">
                    <Icon icon={IconNames.PHONE} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} />
                    <div>신부에게 문자하기</div>
                </a>
            </div>
        </div>
    )
}

export default Intro;