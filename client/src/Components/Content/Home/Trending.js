import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import getTrending from './../../../API/getTrending';
import Card from './Card';
import {Link} from 'react-router-dom';
let getData = (store)=>{
    console.log("data here",store.popular)
    return {
        trending:store.popular.trending
    }
}
let getFunction = (dispatch)=>{

    return{
        setTrending:dispatch,
        play:dispatch
    }
}

export default connect(getData,getFunction)(class Trending extends Component {

    
    componentDidMount = ()=>{
        let data=getTrending()
        console.log("Data here...",data);
        data.then((res)=>{
            console.log("Data here...",data);
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
                <div className="rowHeader">
                    <span>Trending</span>
                    <Link to="/trending"><button>See All</button></Link>
                </div>
                <div className="rowBody">
                {this.props.trending && this.props.trending.map((items,key)=>{
                    
                    return(
                        <Card key={key} id={items.id} thumbnail={items.snippet.thumbnails.default.url} title={"a"} duration={"a"}/>
                    )
                })}
                </div>
                
            </Fragment>
        )
    }
})
