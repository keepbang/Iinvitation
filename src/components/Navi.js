import React from 'react'
import {Link} from "react-router-dom";
import {
    Navbar,
    NavbarGroup,
    Button, Alignment
  } from '@blueprintjs/core';

import '../css/Navi.scss';

function Navi(props) {
    console.log(props);
    return (
        <Navbar fixedToTop className="navi_main">
            <NavbarGroup className="navi__group" align={Alignment.CENTER}>
                <Link className="navi___link main_link" to="/">
                    <Button className="bp3-button bp3-outlined bp3-minimal navi___item" icon="home">
                        <div className="navi____text">HOME</div>
                    </Button>
                </Link>
                <Link className="navi___link intro_link" to="/intro">
                    <Button className="bp3-button bp3-outlined bp3-minimal navi___item" icon="social-media">
                        <div className="navi____text">연락하기</div>
                    </Button>
                </Link>
                <Link className="navi___link route_link" to="/road">
                    <Button className="bp3-button bp3-outlined bp3-minimal navi___item" icon="route">
                        <div className="navi____text">오시는 길</div>
                    </Button>
                </Link>
                <Link className="navi___link photo_link" to="/photo">
                    <Button className="bp3-button bp3-outlined bp3-minimal navi___item" icon="media">
                        <div className="navi____text">사진첩</div>
                    </Button>
                </Link>
            </NavbarGroup>
        </Navbar>
    )
}

export default Navi;