import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
let getData = (store) => {
    console.log("RECEVING DIALOG>>", store)
    return{
        dialog : store.cardDialog
    }
    
}

let getFunction = (dispatch) => {
    return {
        dispatch
    }
}
export default connect(getData, getFunction)(class CardDialog extends Component {
    
    render() {
        console.log("X AND  Y>>>",this.props.dialog.x, this.props.dialog.y)
        const style = {
            backgroundColor:"red",
            left:`${this.props.dialog.x}px`,
            top:`${this.props.dialog.y}px`,
            
        }
        return (
            <Fragment>
                {this.props.dialog.view && 
                <div style={style} className="cardDialog">
                    <ul>
                        <li>Mark Favourite</li>
                        <li>Save to Playlist</li>
                        <li>Add to Queue</li>
                    </ul>
                </div> 
    }
            </Fragment>
        )
    }
})
