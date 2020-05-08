import React, { Component, Fragment } from 'react';
import axios from 'axios';
import getToken from './../../Redux/Token/getToken';
import {connect} from 'react-redux';

let getData = (store) => {
    return {
        store
    }
}

let getFunction = (dispatch) => {
    return {
        playlistData: dispatch
    }
}

export default connect(getData, getFunction)(class PlaylistInput extends Component {

    state = {
        playlistname: ""
    }

    handleInput = (e) => {
        this.setState({
            playlistname:e.target.value
        })
    }

    handleButton = () => {
        var token = getToken();
        const {playlistname} = this.state;
        const data = {
            playlistname
        };
        if(token){ 
        axios({
            method: 'POST', 
            url: 'https://server-musicme.herokuapp.com/playlists',
            data: data,
            headers: {
                ["auth-token"]: token //the token is a variable which holds the token
              }
        })
        .then((response) => {
            let action = {
                type: "set_playlist_data",
                payload: response.data
            }
            this.props.playlistData(action);
        })
    }
    }
    render() {
        return (
            <Fragment>
                <div className="playlistHeader">
                    <h1>Create New Playlist</h1>
                </div>
                <div className="playlistInputBox">
                    <input onChange = {(e) => {this.handleInput(e)}} type="text" value={this.state.input} placeholder="New Playlist" autofocus="autofocus"></input>
                </div>
                <div className="playlistInputButton">
                    <button onClick = {() => {this.handleButton()}} >Create</button>
                </div>

            </Fragment>
        )
    }
})
