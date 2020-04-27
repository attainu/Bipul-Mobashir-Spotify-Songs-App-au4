import React, { Component, Fragment} from 'react';
import getAlbumData from './../../API/getAlbumData';
import {connect} from 'react-redux';
import Card from './Home/Card';
let getData = (store) => {
   // console.log("ALBUM DATA>>", store.albumData.albumData)
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
            console.log("ALBUM DATA CDM>>",res)
            let action = {
                type: "set_album_data",
                payload: res
            }
            this.props.albumData(action);
        })
    }
    
    render() {
        return (
            
            <Fragment>
                {this.props.data && this.props.data.map((items, key)=> {
                   console.log(items)
                    return(
                       
                         <Card key={key} id={items.snippet.resourceId.videoId} thumbnail={items.snippet.thumbnails.medium.url} title={"a"} duration={"a"}/> 
                         
                    )
                })}
    
            </Fragment>
        )
    }
})
