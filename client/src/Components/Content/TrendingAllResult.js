import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import getAllTrending from './../../API/getAllTrending';
import Card from './Home/Card';
let getData = (store)=>{
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
        data.then((res)=>{
            let action = {
                type:"set_all_trending",
                payload:res
                
            }
            this.props.setAllTrending(action);
        })
        
        
    }
    render() {
        return (
            <div className="trending">
            <Fragment>
                 {this.props.allTrending && this.props.allTrending.map((items,key)=>{
                    
                    return(
                        <Card key={key} id={items.id} thumbnail={items.snippet.thumbnails.medium.url} title={items.snippet.title} duration={"a"}/>
                    )
                })}
           </Fragment>
           </div>
        )
    }
})
