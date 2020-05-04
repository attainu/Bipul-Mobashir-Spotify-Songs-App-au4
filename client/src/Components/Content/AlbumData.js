import React, { Component, Fragment} from 'react';
import getAlbumData from './../../API/getAlbumData';
import {connect} from 'react-redux';
import Card from './Home/Card';
let getData = (store) => {
    return {
        data: store.albumData.albumData
    }
}

let getFunction = (dispatch) => {
    return {
        albumData: dispatch
    }
}

export default connect(getData, getFunction)(class AlbumData extends Component {
    
    componentDidMount = () => {
        let inputValue = this.props.match.params.value;
        let data = getAlbumData(inputValue);
        data.then(res => {
            let action = {
                type: "set_album_data",
                payload: res
            }
            this.props.albumData(action);
        })
    }
    
    render() {
        return (
            <div className="album">
            <Fragment>
                {this.props.data && this.props.data.map((items, key)=> {
                    console.log("album data",items)
                    return(
                       
                         <Card key={key} id={items.snippet.resourceId.videoId} thumbnail={items.snippet.thumbnails.medium.url} title={items.snippet.title} duration={"a"}/> 
                         
                    )
                })}
    
            </Fragment>
            </div>
        )
    }
})
