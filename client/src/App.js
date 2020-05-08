import React, { Component, Fragment } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js';
import SideNav from './Components/SideNav/SideNav.js';
import MusicPlayer from './Components/MusicPlayer/MusicNav';
import AuthModal from'./Components/AuthModal/AuthModal.js';
import PlaylistModal from './Components/PlaylistModal/PlaylistModal.js';
import PlaylistItemsModal from './Components/PlaylistItemsModal/PlaylistItemsModal';
import {connect} from 'react-redux';
import axios from 'axios';
import getToken from './../src/Redux/Token/getToken';
import CardDialog from './../src/Components/Dialog/CardDialog';

let getData = (store) => {
  return {
    store: store
  }
}

let getFunction = (dispatch) => {
  return {
    status : dispatch,
    closeModal:dispatch
  }
}
export default connect(getData, getFunction)(class App extends Component {
  
  componentDidMount = () => {
    var token = getToken();
    if(token){
      axios.get('http://localhost:5555/status', {
      headers: {
        ["auth-token"]: token //the token is a variable which holds the token
      }
    }).then(res => {
      let action = {
        type: "live_status"

      }
      this.props.status(action);
    })
  }

}
handleCloseModal = ()=>{
  let action = {
    type: "hide_card_dialog"
  }
  this.props.closeModal(action)
}

render() {
  return (
    <Fragment>
    <div onClick={this.handleCloseModal}>
    <Router>
    <AuthModal/>
    <PlaylistModal/>
    <PlaylistItemsModal/>
    <Header/>
    <SideNav/>
    <MusicPlayer/>
    <Content />
    <CardDialog/>
    </Router>
    </div>
    </Fragment>
    )
  }
})
