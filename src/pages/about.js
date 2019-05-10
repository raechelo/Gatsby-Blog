import React from 'react';
import Link from 'gatsby-link';
import img from '../images/zeus.jpg';


const AboutPage = () => (
  <div>
    <h1>About Me</h1>
    <img src={img} width="400px" />
     <p>He made many woofs wrinkler borkdrive clouds, you are doing me the shock. Big ol maximum borkdrive very hand that feed shibe porgo wow such tempt, long woofer you are doing me the shock the neighborhoo</p>
    <Link to="/"><i class="fas fa-arrow-left"></i>Go back to the homepage</Link>
  </div>
)

export default AboutPage;