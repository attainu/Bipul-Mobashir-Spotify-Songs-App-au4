import React, { Component ,Fragment } from 'react'
import {connect} from 'react-redux';
import getRadio from './../../API/getRadio.js';
import Card from './../../Components/Content/Home/Card';

let getData = (store) => {
    console.log("radio data receving from store", store.radio.radioResult)
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
            console.log("data radio nav>>>",res)
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
                    
                        <Card key={key} id={items.snippet.resourceId.videoId} thumbnail={items.snippet.thumbnails.default.url} title={"a"} duration={"a"}/>
                   )
               })}
            </Fragment>
        )
    }
})
