import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import getArtist from './../../API/getArtist.js';
import Card from './Home/Card.js';

let getData = (store) => {
    console.log("artist data received from store>>",store.artists.artistResult)
    return {
        artistResult: store.artists.artistResult
    }
}

let getFunction = (dispatch) => {
    return {
        setArtist: dispatch
    }
}

export default connect(getData, getFunction)(class ArtistResult extends Component {
    
    componentDidMount = () => {
        let data = getArtist();
        data.then(res => {
            console.log("artist data>>",res)
            let action = {
                type: "set_artist",
                payload: res
            }
            this.props.setArtist(action);
        })
    }

    

    render() {
        return (
            <Fragment>
                this is artist
                {this.props.artistResult && this.props.artistResult.map((items, key)=> {
                    return (
                        <div >
                        {items.artistname}
                        <Link to={`artist/${items.artistname}`}><Card key={key} id={items.id} thumbnail={items.imgurl}/></Link>
                        </div>
                    )
                })}
            </Fragment>
           
        )
    }
})
