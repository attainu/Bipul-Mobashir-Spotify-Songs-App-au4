import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import getToken from './../../Redux/Token/getToken';
let getData = (store) => {
    console.log("<<<PLAYLIST DATA NAME RECEIVING FROM STORE>>", store.playlistModal.playlistData)

    return {
        playlistName: store.playlistModal.playlistData,
        playlistData: store.cardDialog
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
                url: `http://localhost:5555/songs`,
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
            .then((response) => {
                console.log("Playlist RESPONSE>>",response);
               
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
                <ul className="playlistName">
                {this.props.playlistName && this.props.playlistName.map((items, key) => {
                    return(
                        <li onClick={()=> {this.handlePlaylistItems(items.id)}} key={key}>{items.playlistname}</li>
                    )          
                })}
                </ul>
            </Fragment>

        )
    }
})
