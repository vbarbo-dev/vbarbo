import React from 'react';
import Navbar from '../Navbar/index'
import Logo from '../../assets/images/vbarbo-logo.png'
import Style from './header.module.scss'

function Header() {
  return (
    <header className={`bg-white`}>
      <div className="container mx-auto">
        <div className={`flex items-center py-3 px-5 ${Style.headerSticky}`}>
            <div className="flex-auto logo">
              <div className={`logo-container ${Style.logo}`}>
                <a href="/">
                  <img src={Logo} alt="vBarbo" title="vBarbo"/>
                </a>
              </div>
            </div>
            <div className="flex-auto navbar">
              <Navbar />
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
