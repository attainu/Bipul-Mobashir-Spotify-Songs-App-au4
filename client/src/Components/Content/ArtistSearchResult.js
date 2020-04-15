import React, { Component, Fragment } from 'react'
import getArtistSearchResult from './../../API/getArtistSearchResult';
import {connect} from 'react-redux';
import Card from './Home/Card';


let getData = (store) => {
    console.log("receiving artist search data from store>>>>", store.artistSearchResult.artistSearchResult)
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
        // console.log("This is testing props",newprops);
        // console.log("receive>>", this.props.match.params.value)
        // console.log("Compare props",newprops.match.params.value,this.props.match.params.value);
        if(newProps.match.params.value !== this.props.match.params.value){
            console.log("inside if");
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
        console.log("Mounted");
        console.log("receive>>", this.props.match.params.value)
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
                {this.props.artistSearchResult && this.props.artistSearchResult.map((items, key)=> {
                   // console.log(items)
                    return(
                       
                            <Card key={key} id={items.id.videoId} thumbnail={items.snippet.thumbnails.default.url} title={"a"} duration={"a"}/> 
                         
                    )
                })}
    
            </Fragment>
        )
    }
})
