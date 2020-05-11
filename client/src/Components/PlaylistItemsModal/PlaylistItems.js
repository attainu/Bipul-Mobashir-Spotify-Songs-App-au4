import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import getToken from './../../Redux/Token/getToken';
import PlaylistInput from './../PlaylistModal/PlaylistInput'

let getData = (store) => {
    return {
        playlistName: store.playlistModal.playlistData,
        playlistData: store.cardDialog,
        message: store.errorHandler
    }
}

let getFunction = (dispatch) => {
    return {
        modalHide: dispatch
    }
}

export default connect(getData, getFunction)(class PlaylistItems extends Component {
    handlePlaylistItems = (playlistid) => {
        let token = getToken();
        
        if(token) {
            axios({
                method: 'POST',
                url: `https://server-musicme.herokuapp.com/songs`,
                data: {
                    trackid: this.props.playlistData.trackid,
                    playlistid: playlistid,
                    trackname: this.props.playlistData.trackname,
                    imgurl: this.props.playlistData.imgurl
                },
                headers: {
                    ["auth-token"]: token //the token is a variable which holds the token
                  }
            })
            
        }   

        let action = {
            type:"set_playlistItems_modal",
        
        }
        this.props.modalHide(action);
    }
    render() {
        return (
            <Fragment>
                {this.props.playlistName.length > 0 && <ul className="playlistNameBox">
                {this.props.playlistName && this.props.playlistName.map((items, key) => {
                    return(
                        <li onClick={()=> {this.handlePlaylistItems(items.id)}} key={key}>{items.playlistname}</li>
                    )          
                })}
                </ul>}
                {this.props.playlistName.length < 1 &&
                <PlaylistInput/>
                }
                {this.props.message.status && <div className="errorModalPopup">
                    <div className="error">
                    <span className="errorMessage">{this.props.message.message}</span>
                    </div>
                </div>}       
            </Fragment>

        )
    }
})
