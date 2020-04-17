import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import getAllTrending from './../../API/getAllTrending';
import Card from './Home/Card';
let getData = (store)=>{
    console.log("receiving all trending data from store>>>",store.allTrending.allTrending)
    return {
        allTrending:store.allTrending.allTrending
    }
}

let getFunction = (dispatch)=>{
    return{
        setAllTrending:dispatch,
        
    }
}

export default connect(getData, getFunction)(class TrendingAllResult extends Component {
    
    componentDidMount = ()=>{
        let data=getAllTrending()
        console.log("Data here...",data);
        data.then((res)=>{
            console.log("trending Data here...",res);
            let action = {
                type:"set_all_trending",
                payload:res
                
            }
            this.props.setAllTrending(action);
        })
        
        
    }
    render() {
        return (
            <Fragment>
                 <h3>ALL Trending</h3>
                 {this.props.allTrending && this.props.allTrending.map((items,key)=>{
                    
                    return(
                        <Card key={key} id={items.id} thumbnail={items.snippet.thumbnails.default.url} title={"a"} duration={"a"}/>
                    )
                })}
           </Fragment>
        )
    }
})
