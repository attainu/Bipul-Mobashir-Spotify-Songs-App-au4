import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import getToken from './../../Redux/Token/getToken';
import Card from './../Content/Home/Card';

let getData = (store) => {
    console.log("PlaylistDATA",store);
    return{
        playlistData: store.playlistModal.savePlaylistData
    }
}

let getFunction = (dispatch) => {
    return{
        savePlaylistData: dispatch
    }
}

export default connect(getData, getFunction)(class PlaylistDataResult extends Component {
    componentDidMount = () => {
        let token = getToken();
        if(token) {
            axios({
                method: 'GET',
                url: `http://localhost:5555/getAllSongs/${this.props.match.params.value}`,
                
                headers: {
                    ["auth-token"]: token //the token is a variable which holds the token
                }
            })
            .then((response) => {
                console.log("All Playlist RESPONSE>>",response);
                let action = {
                    type: "save_playlist_data",
                    payload: response.data
                }
                this.props.savePlaylistData(action)
                
            })    
        }
    }
    
    componentWillReceiveProps = (newprops) => {
        console.log("NEWPROPS",newprops)
        console.log("THIS.PROPS",this.props)
        if(newprops.match.params.value !== this.props.match.params.value){
            let value = newprops.match.params.value
            let token = getToken();
            if(token) {
                axios({
                    method: 'GET',
                    url: `http://localhost:5555/getAllSongs/${value}`,
                    
                    headers: {
                        ["auth-token"]: token //the token is a variable which holds the token
                    }
                })
                .then((response) => {
                    console.log("All Playlist RESPONSE>>",response);
                    let action = {
                        type: "save_playlist_data",
                        payload: response.data
                    }
                    this.props.savePlaylistData(action)
                    
                })    
            }
        }
    }
    
    
    render() {
        return (
            <Fragment>
            {this.props.playlistData && this.props.playlistData.map((items, key)=> {
                return(
                    <Card key={key} id={items.trackid} thumbnail={items.imgurl} title={"a"} duration={"a"}/>   
                    )
                })}
                </Fragment>
                )
            }
        })
        