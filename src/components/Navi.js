import React from 'react'
import {Link} from "react-router-dom";
import {
    Navbar,
    NavbarGroup,
    Button, Alignment, Icon
  } from '@blueprintjs/core';

  import { IconNames } from "@blueprintjs/icons";

import '../css/Navi.scss';

function Navi() {
    return (
        <Navbar fixedToTop className="navi_main">
            <NavbarGroup className="navi__group" align={Alignment.CENTER}>
                <Link className="navi___link main_link" to="/">
                    <Button className="bp3-button bp3-outlined bp3-minimal navi___item">
                        <Icon className="navi___icon" icon={IconNames.HOME} iconSize={Icon.SIZE_STANDARD}/>
                        <div className="navi____text">HOME</div>
                    </Button>
                </Link>
                <Link className="navi___link intro_link" to="/intro">
                    <Button className="bp3-button bp3-outlined bp3-minimal navi___item">
                        <Icon className="navi___icon" icon={IconNames.SOCIAL_MEDIA} iconSize={Icon.SIZE_STANDARD}/>
                        <div className="navi____text">연락하기</div>
                    </Button>
                </Link>
                <Link className="navi___link route_link" to="/road">
                    <Button className="bp3-button bp3-outlined bp3-minimal navi___item">
                        <Icon className="navi___icon" icon={IconNames.GEOLOCATION} iconSize={Icon.SIZE_STANDARD}/>
                        <div className="navi____text">오시는 길</div>
                    </Button>
                </Link>
                <Link className="navi___link photo_link" to="/photo">
                    <Button className="bp3-button bp3-outlined bp3-minimal navi___item">
                        <Icon className="navi___icon" icon={IconNames.CAMERA} iconSize={Icon.SIZE_STANDARD}/>
                        <div className="navi____text">사진첩</div>
                    </Button>
                </Link>
            </NavbarGroup>
        </Navbar>
    )
}

export default Navi;