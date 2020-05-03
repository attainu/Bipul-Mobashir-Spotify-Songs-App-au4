import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import getToken from './../../Redux/Token/getToken';
import Card from './Home/Card';

let getData = (store) => {
    return {
        status : store.auth,
        favouritesData: store.allFavourites.allFavourites
    }
}

let getFunction = (dispatch) => {
    return {
         setAllFavourites: dispatch
    }
}

export default connect(getData, getFunction)(class Favourite extends Component {

    componentDidMount = () => {
        var token = getToken();
        if(token){
            axios({
                method: 'GET',
                url: 'http://localhost:5555/getAllFavourites',
                headers: {
                    ['auth-token']: token
                }
            }).then((response) => {
                let action = {
                    type: "set_all_favourites",
                    payload: response
                }
                this.props.setAllFavourites(action);
            })
        }

    }
    render() {
        return (
            <div>
            {this.props.status.auth && 
                <Fragment>
                   {this.props.favouritesData && this.props.favouritesData.map((items, key) => {
                       return (
                        <Card key={key} id={items.trackid} thumbnail={items.imgurl} title={items.trackname} duration={"a"}/>
                       )
                   })}
                </Fragment>}
            </div>
        )
    }
})
