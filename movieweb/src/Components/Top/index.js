import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader'
import Carousel from './Carousel'
import HomeTool from './HomeTool'


class TOP extends Component {
    render() {
        return (
            <div>
                <NavbarHeader />
                <Carousel />
                <HomeTool/>
            </div>
        );
    }
}

export default TOP;