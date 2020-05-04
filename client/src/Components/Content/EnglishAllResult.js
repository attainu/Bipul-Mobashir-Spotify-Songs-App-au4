import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import getAllEnglish from './../../API/getAllEnglish';
import Card from './Home/Card';

let getData = (store) => {
    return {
        allEnglishSongs: store.allEnglish.allEnglish
    }
}

let getFunction = (dispatch) => {
    return {
        setAllEnglish: dispatch
    }
}
export default connect(getData, getFunction)(class EnglishAllResult extends Component {

    componentDidMount = () => {
        let data = getAllEnglish()
        data.then(res => {
            let action = {
                type: "set_all_english",
                payload: res
            }
            this.props.setAllEnglish(action);
        })
    }
    render() {
        return (
            <div className="allEnglish">
            <Fragment>
                 {this.props.allEnglishSongs && this.props.allEnglishSongs.map((items,key)=>{
                    
                    return(
                        <Card key={key} id={items.id} thumbnail={items.snippet.thumbnails.medium.url} title={items.snippet.title} duration={"a"}/>
                    )
                })}
           </Fragment>
           </div>
        )
    }
})
