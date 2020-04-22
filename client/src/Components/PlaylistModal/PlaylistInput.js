import React, { Component, Fragment } from 'react';

export default class PlaylistInput extends Component {

    state = {
        input: ""
    }

    handleInput = (e) => {
        console.log(e.target.value)
        this.setState({
            input:e.target.value
        })
    }

    handleButton = () => {
        console.log("calling")
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input onChange = {(e) => {this.handleInput(e)}} type="text" value={this.state.input} placeholder="Playlist Name"></input>
                </div>
                <div>
                    <button onClick = {() => {this.handleButton()}} >Create</button>
                </div>

            </Fragment>
        )
    }
}
