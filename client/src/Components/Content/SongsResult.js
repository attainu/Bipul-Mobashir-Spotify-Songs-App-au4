import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import getSongs from './../../API/getSongs';
import Card from './Home/Card';
let getData = (store) => {
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
        data.then((res) => {
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
            <div className="trending">
            {this.props.allSongs && this.props.allSongs.map((items, key)=> {
                    return (

                        <Card key={key} id={items.id.videoId} thumbnail={items.snippet.thumbnails.medium.url} title={"a"} duration={"a"}/>
                        
                    )
                })}
                </div>
            </Fragment>
        )
    }
})
