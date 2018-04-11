import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#/home" className="brand-logo">
            {props.title}
          </a>
        </div>
      </nav>
    </div>
  );
}
Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: 'Movies',
};

export default Header;
