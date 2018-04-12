import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#/home" className="brand-logo center">
            {props.title}
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <a href="#/home" className="waves-effect waves-light btn">
              TMDB
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: 'Trending Movies',
};

export default Header;
