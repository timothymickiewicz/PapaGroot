import React from 'react';
import './Nav.css';

const navOptions = 
[
    {
        title: "YouTube",
        image: "image route ex: ./images/dineordash.png",
        link: "link ex: https://github.com/timothymickiewicz/dine-or-dash"
     },
     {
        title: "Twitch",
        image: "image route ex: ./images/dineordash.png",
        link: "link ex: https://github.com/timothymickiewicz/dine-or-dash"
     },
     {
        title: "Discord",
        image: "image route ex: ./images/dineordash.png",
        link: "link ex: https://github.com/timothymickiewicz/dine-or-dash"
     }
];

function Nav() {

  return (
    <div className="row" id="navbar">
        {navOptions.map((options, index) => {
            return (
                <button className="navButton" key={index}>{options.title}</button>
            )
        })}
    </div>
  );
}

export default Nav;