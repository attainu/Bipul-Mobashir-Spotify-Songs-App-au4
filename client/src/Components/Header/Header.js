import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="brand">
                    <img src="https://res.cloudinary.com/dbbphbyf8/image/upload/v1586360806/Music_dpsg1v.svg"/>
                </div>
                <div className="search"><Search/></div>
                
                <div className="userAuth">login/signup</div>

                
            </header>
        )
    }
}
