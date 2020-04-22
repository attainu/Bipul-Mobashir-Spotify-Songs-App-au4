import React, { Component,Fragment } from 'react'

export default class CardDialog extends Component {
    state = {
        x:0,
        y:0,
        view:false
    }
    render() {
        let style = {
            backgroundColor:"red",
            position:"absoulte",
            left:`${this.state.x}`,
            top:`${this.state.x}`
        }
        return (
            <Fragment>
                {this.state.view && 
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
}
