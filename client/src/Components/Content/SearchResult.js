import React, { Component, Fragment } from 'react'
import getSearch from './../../API/getSearch';
import {connect} from 'react-redux';
import Card from './Home/Card';
let getData = (store) => {
    return{
        searchResult: store.search.searchResult
    }
}

let getFunction = (dispatch) => {
    return{
        getSearch:dispatch
    }
}
export default connect(getData, getFunction)(class SearchResult extends Component {
    componentWillReceiveProps = (newprops)=>{
        if(newprops.match.params.value !== this.props.match.params.value){
        let inputValue = newprops.match.params.value;
        let data = getSearch(inputValue)
        data.then(res => {
            let action = {
                type:"set_search",
                payload: res
            }

            this.props.getSearch(action);
        })
    }

    }
    componentDidMount = ()=>{
        let inputValue = this.props.match.params.value;
        let data = getSearch(inputValue)
        data.then(res => {
            let action = {
                type:"set_search",
                payload: res
            }

            this.props.getSearch(action);
        })
    }
    
    render() {
        return (
            <Fragment>
                {this.props.searchResult && this.props.searchResult.map((items, key)=> {
                    return(
                    
                        <Card key={key} id={items.id.videoId} thumbnail={items.snippet.thumbnails.medium.url} title={items.snippet.title} duration={"a"}/>   
                    )
                })}
            
            </Fragment>
        )
    }
})
