import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class SideNav extends Component {
    render() {
        return (
            <aside className="sideNav">
               <div className="hidden"></div>
               <div className="B">
                   <div className="musicTab">Music</div>
                   <nav>
                       <Link to = "/"><div>Home</div></Link>
                       <div>Songs</div>
                       <div>Album</div>
                       <div>Artist</div>
                       <div>Favourite</div>
                   </nav>
               </div>
               <div>C</div>
               <div>D</div>
            </aside>
        )
    }
}
