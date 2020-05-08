import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router';
import getToken from './../../Redux/Token/getToken';

let getData = (store) => {
    return{
        dialog : store.cardDialog,
        auth: store.auth,
        playlistId: store.playlistModal.savePlaylistData[0]
    }
    
}

let getFunction = (dispatch) => {
    return {
        removeFavourite: dispatch,
        modal: dispatch,
        hideCardDialog: dispatch,
        removePlaylistItems: dispatch
    }
}
export default withRouter(connect(getData, getFunction)(class CardDialog extends Component {

    handlefavourite = () => {
        let token = getToken();
        
        if(token) {
            axios({
                method: 'POST',
                url: 'https://server-musicme.herokuapp.com/favourites',
                data: this.props.dialog,
                headers: {
                    ["auth-token"]: token //the token is a variable which holds the token
                  }
            })
            
        }
        
    }

    handleRemove = () => {
        let token = getToken();
        
        if(token) {
            axios({
                method: 'DELETE',
                url: `https://server-musicme.herokuapp.com/favourites/${this.props.dialog.trackid}`,
                headers: {
                    ["auth-token"]: token //the token is a variable which holds the token
                  }
            })
            .then((response) => {
                let action = {
                    type: "remove_favourite",
                    payload: this.props.dialog.trackid
                }
                this.props.removeFavourite(action);
            })
            
        }   
    }

    handlePlaylistModal = () => {
        let action = {
            type: "set_playlistItems_modal"
        }
        this.props.modal(action);
    }

    handleHideCardDialog = () => {
        let action = {
            type: "hide_card_dialog"
        }
        this.props.hideCardDialog(action)   
    }

    handleRemovePlaylist = () => {
        let token = getToken();
        
        if(token) {
            axios({
                method: 'DELETE',
                url: `https://server-musicme.herokuapp.com/songs/${this.props.dialog.trackid}/${this.props.playlistId.playlistid}`,
                headers: {
                    ["auth-token"]: token //the token is a variable which holds the token
                  }
            })
            .then((response) => {
                let action = {
                    type: "remove_playlist_items",
                    payload: this.props.dialog.trackid
                         
                }
                this.props.removePlaylistItems(action);
            })
            
        }   
    }

    render() {
        let l = this.props.dialog.x + 10
        let h = this.props.dialog.y
        if((window.innerWidth - this.props.dialog.x) < 100){
            l = l - 100;
        }
        if((window.innerHeight - this.props.dialog.y) < 100){
            h = h - 100;
        }
        
        const style = {
            left:`${l}px`,
            top:`${h}px`,
            
        }
        return (
            <Fragment>
                {this.props.dialog.view && 
                <div style={style} className="cardDialog">
                    <ul onClick={this.handleHideCardDialog}>
                        {this.props.location.pathname!=="/favourite" && this.props.auth.auth && <li onClick={() => {this.handlefavourite()}}>Mark as Favourite</li>}
                        {this.props.location.pathname==="/favourite" && this.props.auth.auth && <li onClick={() => {this.handleRemove()}}>Remove</li>}
                        {true !== this.props.location.pathname.includes('/playlist') && this.props.auth.auth && <li onClick={() => {this.handlePlaylistModal()}}>Add to Playlist</li>}
                        {true === this.props.location.pathname.includes('/playlist') && this.props.auth.auth && <li onClick={()=> {this.handleRemovePlaylist()}}>Remove From Playlist</li>}
                        {this.props.auth.auth && <li>Add to Queue</li>}
                    </ul>
                </div> 
    }
            </Fragment>
        )
    }
}))
