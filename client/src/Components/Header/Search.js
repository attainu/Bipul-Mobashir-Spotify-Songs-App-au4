import React, { Component, Fragment } from 'react'

export default class Search extends Component {
    render() {
        return (
            <Fragment>
                <input className="searchSong" type="text" placeholder="Type here to search song"/>
            </Fragment>
        )
    }
}
