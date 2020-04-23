import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router';
import getToken from './../../Redux/Token/getToken';

let getData = (store) => {
    console.log("RECEVING DIALOG>>", store.cardDialog)
    return{
        dialog : store.cardDialog
    }
    
}

let getFunction = (dispatch) => {
    return {
        removeFavourite: dispatch
    }
}
export default withRouter(connect(getData, getFunction)(class CardDialog extends Component {

    handlefavourite = () => {
        let token = getToken();
        
        if(token) {
            axios({
                method: 'POST',
                url: 'http://localhost:5555/favourites',
                data: this.props.dialog,
                headers: {
                    ["auth-token"]: token //the token is a variable which holds the token
                  }
            })
            
        }   
    }

    handleRemove = () => {
        let token = getToken();
        
        if(token) {
            axios({
                method: 'DELETE',
                url: `http://localhost:5555/favourites/${this.props.dialog.trackid}`,
                headers: {
                    ["auth-token"]: token //the token is a variable which holds the token
                  }
            })
            .then((response) => {
                console.log("DELETe RESPONSE>>",response);
                let action = {
                    type: "remove_favourite",
                    payload: this.props.dialog.trackid
                }
                this.props.removeFavourite(action);
            })
            
        }   
    }

    

    
    render() {
        console.log("X AND  Y>>>",this.props.dialog.x, this.props.dialog.y)
        let l = this.props.dialog.x
        let h = this.props.dialog.y - 100
        if((window.innerWidth - this.props.dialog.x) < 100){
            l = l - 100;
        }
        
        const style = {
            backgroundColor:"red",
            left:`${l}px`,
            top:`${h}px`,
            
        }
        return (
            <Fragment>
                {this.props.dialog.view && 
                <div style={style} className="cardDialog">
                    <ul>
                        {this.props.location.pathname!=="/favourite" && <li onClick={() => {this.handlefavourite()}}>Mark Favourite</li>}
                        {this.props.location.pathname==="/favourite" && <li onClick={() => {this.handleRemove()}}>Remove</li>}
                        <li>Save to Playlist</li>
                        <li>Add to Queue</li>
                    </ul>
                </div> 
    }
            </Fragment>
        )
    }
}))
