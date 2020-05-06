import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import getAllRadio from './../../API/getAllRadio';
import List from './Home/List';

let getData = (store) => {
    return {
        allRadio: store.allRadio.allRadio
    }
}

let getFunction = (dispatch) => {
    return {
        setAllRadio : dispatch
    }
}

export default connect(getData, getFunction)(class RadioAllResult extends Component {

    componentDidMount = () => {
        let data = getAllRadio();
        data.then(res => {
            let action = {
                type : 'set_all_radio',
                payload : res
            }
            this.props.setAllRadio(action);
        })
    }

    render() {
        return (
            <div className="radioAll">
            <Fragment>
            {this.props.allRadio && this.props.allRadio.map((items,key)=>{            
                    return(
                        <List key={key} id={items.id.videoId} thumbnail={items.snippet.thumbnails.default.url} title={items.snippet.title} duration={"a"}/>
                    )
                })}
            </Fragment>
            </div>
        )
    }
})
