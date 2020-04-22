import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import getSongs from './../../API/getSongs';
import Card from './Home/Card';
let getData = (store) => {
    console.log("receiving songs data from store>>",store.songs.songs)
    return {
        allSongs : store.songs.songs
    }
}

let getFunction = (dispatch) => {
    return {
        setSongs : dispatch
    }
}
export default connect(getData, getFunction)(class SongsResult extends Component {

    componentDidMount = () => {
        let data = getSongs();
        console.log("upper songs data is here>>", data);
        data.then((res) => {
            console.log("songs data is here>>>",res);
            let action = {
                type: "set_songs",
                payload: res
            }
            this.props.setSongs(action);
        })
    }

    render() {
        return (
            <Fragment>
            <div>
                This is songs
            </div>
            {this.props.allSongs && this.props.allSongs.map((items, key)=> {
                    return (

                        <Card key={key} id={items.id.videoId} thumbnail={items.snippet.thumbnails.medium.url} title={"a"} duration={"a"}/>
                        
                    )
                })}
            </Fragment>
        )
    }
})
