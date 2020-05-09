import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import getToken from './../../Redux/Token/getToken';
import {Link} from 'react-router-dom';

let getData = (store) => {
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
        var token = getToken();
        if(token){
            axios({
                method: 'GET', 
                url: 'https://server-musicme.herokuapp.com/getAllPlaylists',
                headers: {
                    ["auth-token"]: token //the token is a variable which holds the token
                  }
            }).then((response) => {
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
                url: `https://server-musicme.herokuapp.com/playlists/${id}`,
                headers: {
                    ["auth-token"]: token //the token is a variable which holds the token
                  }
            })
            .then((response) => {
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
                        <div key={key}>
                        <Link to={`/playlist/${items.id}`}><li key={key}>{items.playlistname}</li></Link>
                        <div className="playlist_remove_item_buttton" onClick={() => {this.handleDeletePlaylist(items.id)}}>x</div>
                        </div>
                    )          
                    
                })}
                </ul>
            </Fragment>

        )
    }
})


