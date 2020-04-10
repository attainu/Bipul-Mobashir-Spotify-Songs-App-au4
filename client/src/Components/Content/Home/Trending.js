import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
let getData = (store)=>{
    console.log(store);
}
let getFunction = (dispatch)=>{

    return{
        getTrending:dispatch
    }
}

export default connect(getData,getFunction)(class Trending extends Component {
    componentDidMount = ()=>{
        let action = {
            type:"get_trending"

        }
        this.props.getTrending(action);
    }
    render() {
        return (
            <Fragment>
                This is Trending
            </Fragment>
        )
    }
})
