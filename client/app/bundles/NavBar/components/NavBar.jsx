import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
    <div id="navblock">
      <nav id="navbar">
          <div className="navWide">
              <div className="nav-logo">
                <a href="#"><strong> SOAP </strong></a>
              </div>
              <div className="nav-items">
                  <a href="concept">concept</a>
                  <a href="podcast">podcast</a>
                  <a href="contact">contact</a>
              </div>
          </div>
      </nav>
    </div>


      
    );
  }
}
