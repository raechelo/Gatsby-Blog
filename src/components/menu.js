import React from 'react';
import Link from 'gatsby-link';

const Menu = () => (
  <div style ={{
      background: '#f4f4f4',
      paddingTop: '10px'
      }}>

  <ul style={{
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly'
  }}>
      <li><Link to="/" ><i class="fas fa-home"></i>Home</Link></li>
      <li><Link to="/about" ><i class="fas fa-question"></i>About</Link></li>
      <li><Link to="/services" ><i class="fas fa-bone"></i>Services</Link></li>
      <li><Link to="/contact" ><i class="fas fa-phone"></i>Contact</Link></li>
    </ul>
  </div>
)

export default Menu;