import React, { Component ,Fragment } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import getRadio from './../../API/getRadio.js';
import List from './../Content/Home/List';

let getData = (store) => {
    return {
        radioResult: store.radio.radioResult
    }
}
let getFunction = (dispatch) => {
    return {
        setRadio: dispatch
    }
}

export default connect(getData, getFunction)(class RadioNav extends Component {

    componentDidMount = () => {
        let data = getRadio()

        data.then(res => {
            let action = {
                type: "set_radio",
                payload: res
            }
            this.props.setRadio(action);
        })
    }
    render() {
        return (
            <Fragment>
               {this.props.radioResult && this.props.radioResult.map((items, key) => {
                   return (
                    
                        <List number={key} key={key} id={items.id.videoId} thumbnail={items.snippet.thumbnails.default.url} title={items.snippet.title} duration={"a"}/>
                   )
               })}
               <Link to="/radio"><button>See All</button></Link>
            </Fragment>
        )
    }
})
