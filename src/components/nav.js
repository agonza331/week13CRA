import React from 'react';
import '../login.css'; // Import the CSS file for styling

/*function created to return a navbar that has 3 tabs, currently not going 
to a new link*/

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
