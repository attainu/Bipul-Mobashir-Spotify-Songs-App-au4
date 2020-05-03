import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import getAlbum from './../../API/getAlbum';
import Card from './Home/Card'

let getData = (store) => {
    return {
        album : store.album.album
    }
}

let getFunction = (dispatch) => {
    return {
        setAlbum : dispatch
    }
}

export default connect(getData, getFunction)(class AlbumResult extends Component {

    componentDidMount = () => {
        let data = getAlbum();
        data.then((res) => {
            let action = {
                type: "set_album",
                payload: res
            }
            this.props.setAlbum(action);
        })
    }
    render() {
        return (
            <Fragment>
            <div className="trending">
            {this.props.album && this.props.album.map((items, key)=> {
                    return (
                        <div key={key}>
                        <Link to={`/album/${items.id}`}><Card key={key} id={items.id} thumbnail={items.snippet.thumbnails.medium.url} title={items.snippet.title} duration={"a"}/></Link>
                        </div>
                    )
                })}
                </div>
            </Fragment>
        )
    }
})
