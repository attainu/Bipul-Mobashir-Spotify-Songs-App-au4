import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import getTrending from './../../../API/getTrending';
let getData = (store)=>{
    console.log("data here",store.popular)
    return {
        trending:store.popular.trending
    }
}
let getFunction = (dispatch)=>{

    return{
        setTrending:dispatch
    }
}

export default connect(getData,getFunction)(class Trending extends Component {

    
    componentDidMount = ()=>{
        let data=getTrending()
        console.log("Data here...",data);
        data.then((res)=>{
            let action = {
                type:"set_trending",
                payload:res
                
    
            }
            this.props.setTrending(action);
        })
        
        
    }
    render() {
        return (
            <Fragment>
                This is Trending
            </Fragment>
        )
    }
})
