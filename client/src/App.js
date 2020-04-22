import React, { Component, Fragment } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js';
import SideNav from './Components/SideNav/SideNav.js';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer.js';
//import RadioNav from './Components/RadioNav/RadioNav.js';
import AuthModal from'./Components/AuthModal/AuthModal.js';
import PlaylistModal from './Components/PlaylistModal/PlaylistModal.js';
import {connect} from 'react-redux';
import axios from 'axios';
import getToken from './../src/Redux/Token/getToken';

let getData = (store) => {
  return {
    store: store
  }
}

let getFunction = (dispatch) => {
  return {
    status : dispatch
  }
}
export default connect(getData, getFunction)(class App extends Component {
  
  componentDidMount = () => {
    var token = getToken();
    console.log("dhhdhdhd?>>",token);
    if(token){
      axios.get('http://localhost:5555/status', {
      headers: {
        ["auth-token"]: token //the token is a variable which holds the token
      }
    }).then(res => {
      console.log("get token>>>",res)
      let action = {
        type: "live_status"

      }
      this.props.status(action);
    })
  }

}

render() {
  return (
    <Fragment>
    
    <Router>
    <AuthModal/>
    <PlaylistModal/>
    <Header/>
    <SideNav/>
    <MusicPlayer/>
    <Content/>
    </Router>
    
    </Fragment>
    )
  }
})
