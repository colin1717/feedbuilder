import React, { Component } from 'react';
import './Header.css';
import logo from '../public/images/bv.jpg';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 container header-flex">
          <img src={logo} alt='logo'/>
          <span className='title-font'>feedbuilder</span>
        </div>
        <div className="col-sm-2"></div>
      </div>
    )
  }

}

export default Header;
