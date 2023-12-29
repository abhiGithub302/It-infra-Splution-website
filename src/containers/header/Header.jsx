import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';



const Header = () => (
  
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Welcome to <br /> IT Infra Solutions</h1>
      <p>The-Citrix,TSE & RDS alternative Ensure Business Continuity with <br />
<b>ConnectApp</b></p>

      

      
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
