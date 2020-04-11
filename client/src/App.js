import React, { Component, Fragment } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js';
import SideNav from './Components/SideNav/SideNav.js';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer.js';
import RadioNav from './Components/RadioNav/RadioNav.js';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
        <Header/>
        <SideNav/>
        <MusicPlayer/>
        <Content/>
        </Router>
      </Fragment>
    )
  }
}
