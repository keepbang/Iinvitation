import React from 'react'
import {
    Navbar,
    NavbarGroup,
    Button, Alignment
  } from '@blueprintjs/core';

import '../css/Navi.scss';

function Navi() {
    return (
        <Navbar fixedToTop className="navi_main">
            <NavbarGroup align={Alignment.CENTER}>
                <Button className="bp3-button bp3-minimal" icon="home" text="Home"/>
                <Button className="bp3-button bp3-minimal" icon="route" text="Route"/>
                <Button className="bp3-button bp3-minimal" icon="clipboard" text="Book"/>
                <Button className="bp3-button bp3-minimal" icon="media" text="Photo"/>
            </NavbarGroup>
        </Navbar>
    )
}

export default Navi;