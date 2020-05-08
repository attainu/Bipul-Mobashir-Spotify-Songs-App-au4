import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom';
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
              <Link to="/">
               <div className="brand">
                    <img src="https://res.cloudinary.com/dbbphbyf8/image/upload/v1586360806/Music_dpsg1v.svg"/>
                </div>
                </Link>
               <div className="B">
                   <div className="musicTab">Music</div>
                   <nav>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/"
                    >
                      <i class="fas fa-home"></i>
                      <span>Home</span>
                    </NavLink>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/songs"
                    >
                      <i class="fas fa-music"></i>
                      <span>Songs</span>
                    </NavLink>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/album"
                    >
                      <i class="fas fa-compact-disc"></i>
                      <span>Album</span>
                    </NavLink>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/artist"
                    >
                      <i class="far fa-address-book"></i>
                      <span>Artist</span>
                    </NavLink>
                   {this.props.status.auth && <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/favourite"
                    >
                      <i class="fas fa-heart"></i>
                      <span>Favourite</span>
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
