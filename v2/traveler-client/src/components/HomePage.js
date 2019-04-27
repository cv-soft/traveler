import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/lending.css';

const Homepage = props =>{
    return(
        <div>
            <div id="landing-header">
                <span id="logoLanding">Pro Treveler Blog</span>
                <h1>Hello traveler, wanna share your trip?</h1>
                <Link to="/posts" className="btn btn-lg btn-info">Enter Blog</Link>
            </div>
            <ul className="slideshow">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
};
export default Homepage;