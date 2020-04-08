import React, { Component } from 'react'
import Search from './Search';
export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="brand">Logo</div>
                <div className="search"><Search/></div>
                <div className="userAuth">login/signup</div>
            </header>
        )
    }
}
