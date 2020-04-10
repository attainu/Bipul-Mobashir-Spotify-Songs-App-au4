import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';

let getData = (store)=>{
    console.log(store.search);
}
let getFunction = (dispatch)=>{

    return{
        getSearch:dispatch
    }
}
export default connect(getData,getFunction)(class Search extends Component {
    componentDidMount = ()=>{
        let action = {
            type:"get_search"

        }
        this.props.getSearch(action);
    }


    
    render() {
        return (
            <Fragment>
                <input className="searchSong" type="text" placeholder="Type here to search song"/>
            </Fragment>
        )
    }
})
