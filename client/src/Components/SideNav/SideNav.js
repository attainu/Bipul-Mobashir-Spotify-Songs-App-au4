import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import PlayList from './CreatePlayList';
import PlaylistName from './PlaylistName';

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
               <div className="brand">
                    <img src="https://res.cloudinary.com/dbbphbyf8/image/upload/v1586360806/Music_dpsg1v.svg"/>
                </div>
               <div className="B">
                   <div className="musicTab">Music</div>
                   <nav>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/"
                    >
                      Home
                    </NavLink>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/songs"
                    >
                      Songs
                    </NavLink>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/album"
                    >
                      Album
                    </NavLink>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/artist"
                    >
                      Artist
                    </NavLink>
                   {this.props.status.auth && <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/favourite"
                    >
                      Favourite
                    </NavLink>}
                     
                       
                   </nav>
               </div>
               <hr className="Rootlist_divider"></hr>
               {this.props.status.auth && <div className="C">
               <div className="playlist">Playlists</div>
                    <PlaylistName/>
                    <PlayList/>
               </div>}
            </aside>
        )
    }
}
)
