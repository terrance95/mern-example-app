import React from 'react';
import Button from '../Button';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Photo Gallery
        </a>

        <div className=" ml-auto">
          <ul className="navbar-nav ml-auto">
            <Button />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
