import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import getEnglish from './../../../API/getEnglish.js';
import Card from './Card.js';
import {Link} from 'react-router-dom';
let getData = (store) => {
    console.log("english songs data received from store>>",store.englishSongs.englishResult)
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
            console.log("english songs>>",res);
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
                    <Link to="/english-song"><button>See All</button></Link>
                </div>
                <div className="rowBody">
                {this.props.englishSongs && this.props.englishSongs.map((items, key) => {
                    return(
                        <Card key={key} id={items.id} thumbnail={items.snippet.thumbnails.default.url} title={"a"} duration={"a"}/>
                    )
                })}
                </div>
            </Fragment>
        )
    }
})
