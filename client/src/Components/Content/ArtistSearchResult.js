import React, { Component, Fragment } from 'react'
import getArtistSearchResult from './../../API/getArtistSearchResult';
import {connect} from 'react-redux';
import Card from './Home/Card';


let getData = (store) => {
    return {
        artistSearchResult: store.artistSearchResult.artistSearchResult
    }
} 

let getFunction = (dispatch) => {
    return {
        getArtistSearchResult:dispatch
    }
}

export default connect(getData, getFunction)(class ArtistSearchResult extends Component {
    componentWillReceiveProps = (newProps) => {
        if(newProps.match.params.value !== this.props.match.params.value){
        let inputValue = newProps.match.params.value;
        let data = getArtistSearchResult(inputValue);
        data.then(res => {
            let action = {
                type: "set_artist_search_result",
                payload: res
            }
            this.props.getArtistSearchResult(action)
        })
        }
    }
    componentDidMount = ()=>{
        let inputValue = this.props.match.params.value;
        let data = getArtistSearchResult(inputValue)
        data.then(res => {
            let action = {
                type:"set_artist_search_result",
                payload: res
            }

            this.props.getArtistSearchResult(action);
        })
    }
    render() {
        return (
            <Fragment>
                <div className="trending">
                {this.props.artistSearchResult && this.props.artistSearchResult.map((items, key)=> {
                    return(
                       
                            <Card key={key} id={items.id.videoId} thumbnail={items.snippet.thumbnails.medium.url} title={"a"} duration={"a"}/> 
                         
                    )
                })}
                </div>
    
            </Fragment>
        )
    }
})
