import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import getToken from './../../Redux/Token/getToken';

let getData = (store) => {
    console.log("<<<PLAYLIST DATA NAME RECEIVING FROM STORE>>", store.playlistModal.playlistData)
    return {
        playlistName: store.playlistModal.playlistData
    }
}

let getFunction = (dispatch) => {
    return {
        setPlaylistName :dispatch,
        removePlaylist :dispatch
    }
}

export default connect(getData, getFunction)(class PlaylistName extends Component {

    componentDidMount = () => {
        console.log("HITTTTT>>>>")
        var token = getToken();
        if(token){
            axios({
                method: 'GET', 
                url: 'http://localhost:5555/getAllPlaylists',
                headers: {
                    ["auth-token"]: token //the token is a variable which holds the token
                  }
            }).then((response) => {
                console.log("<<<<PLAYLIST NAME>>>",response)
                let action = {
                    type: "set_playlist_name",
                    payload: response
                }
                this.props.setPlaylistName(action)

            })
        }

    }

    handleDeletePlaylist = (id) => {
        let token = getToken();
        
        if(token) {
            axios({
                method: 'DELETE',
                url: `http://localhost:5555/playlists/${id}`,
                headers: {
                    ["auth-token"]: token //the token is a variable which holds the token
                  }
            })
            .then((response) => {
                console.log("PLAYLIST DELETE RESPONSE>>",response);
                let action = {
                    type: "remove_playlist",
                    payload: id
                }
                this.props.removePlaylist(action);
               
            })
            
        }   
    }


    render() {
        return (
            <Fragment>
                <ul className="playlistName">
                {this.props.playlistName && this.props.playlistName.map((items, key) => {
                    return(
                        <div>
                        <li key={key}>{items.playlistname}</li>
                        <button onClick={() => {this.handleDeletePlaylist(items.id)}}>delete</button>
                        </div>
                    )          
                    
                })}
                </ul>
            </Fragment>

        )
    }
})


