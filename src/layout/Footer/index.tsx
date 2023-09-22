import React from 'react';
import Style from './footer.module.scss';

function Footer() {
  return (
    <footer className={`${Style.footer} hidden`}>
        <div className="grid grid-cols-3 gap-4 container mx-auto">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
    </footer>
  );
}

export default Footer;
