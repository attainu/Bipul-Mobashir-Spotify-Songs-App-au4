import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom';
export default class Search extends Component {
    state = {
        input: ""
    }
    
    handleInput = (value) => {
        this.setState({
            input: value
        })
    }

    render() {
        return (
            <Fragment>
                <input onChange={(e)=>{this.handleInput(e.target.value)}} className="searchSong" value={this.state.input} type="text" placeholder="Type here to search song"/>
                <Link to={`/search/${this.state.input}`}><button>Search</button></Link>
            </Fragment>
        )
    }
}
