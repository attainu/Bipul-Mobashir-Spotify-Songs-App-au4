import React, { Component, Fragment } from 'react'
import getSearch from './../../API/getSearch';
import {connect} from 'react-redux';
import Card from './Home/Card';
let getData = (store) => {
    console.log("search result data>>",store.search.searchResult);
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

    componentDidMount = ()=>{
        console.log("receive>>", this.props.match.params.value)
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
                    console.log(items)
                    return(
                    
                              <Card key={key} id={items.id.videoId} thumbnail={items.snippet.thumbnails.default.url} title={"a"} duration={"a"}/>
                        
                    )
                })}
            
            </Fragment>
        )
    }
})
