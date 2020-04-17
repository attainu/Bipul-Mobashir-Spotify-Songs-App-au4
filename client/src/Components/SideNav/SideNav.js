import React, { Component } from 'react'
import {Link} from 'react-router-dom';
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

export default connect(getData, getFunction)(class SideNav extends Component {
    render() {
        return (
            <aside className="sideNav">
               <div className="hidden"></div>
               <div className="B">
                   <div className="musicTab">Music</div>
                   <nav>
                       <Link to = "/"><div>Home</div></Link>
                       <Link to = "/songs"><div>Songs</div></Link>
                       <div>Album</div>
                       <Link to = "/artist"><div>Artist</div></Link>
                       {this.props.status.auth && <Link to = "/favourite"><div>Favourite</div></Link>}

                   </nav>
               </div>
               <div>C</div>
               <div>D</div>
            </aside>
        )
    }
})
