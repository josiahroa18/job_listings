import React, { Component } from 'react'
import HeaderPic from '../assets/g-dino.png'

export class Header extends Component {
    render() {
        return (
            <header>
                <img src={HeaderPic} alt="Header Img"></img>
            </header>
        )
    }
}

export default Header
