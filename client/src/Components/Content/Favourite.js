import React, { Component } from 'react';
import {connect} from 'react-redux';

let getData = (store) => {
    return {
        status : store.auth
    }
}

let getFunction = (dispatch) => {
    return {
         dispatch
    }
}

export default connect(getData, getFunction)(class Favourite extends Component {
    render() {
        return (
            <div>
            {this.props.status.auth && <div>this is Favourite</div>}
            </div>
        )
    }
})
