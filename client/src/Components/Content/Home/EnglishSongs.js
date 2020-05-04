import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import getEnglish from './../../../API/getEnglish.js';
import Card from './Card.js';
import {Link} from 'react-router-dom';
let getData = (store) => {
    return {
        englishSongs: store.englishSongs.englishResult
    }
}

let getFunction = (dispatch) => {
    return {
        setEnglishSongs: dispatch
    }
}
export default connect(getData, getFunction)(class EnglishSongs extends Component {

    componentDidMount = () => {
        let data = getEnglish()
        data.then(res => {
            let action = {
                type : "set_english",
                payload : res
            }
            this.props.setEnglishSongs(action);
        })
    }
    render() {
        return (
            <Fragment>
                 <div className="rowHeader">
                    <span>Popular in English</span>
                    <Link to="/english-song"><div>See All</div></Link>
                </div>
                <div className="rowBody">
                {this.props.englishSongs && this.props.englishSongs.map((items, key) => {
                    return(
                        <Card key={key} id={items.id} thumbnail={items.snippet.thumbnails.medium.url} title={items.snippet.title} duration={"a"}/>
                    )
                })}
                </div>
            </Fragment>
        )
    }
})
