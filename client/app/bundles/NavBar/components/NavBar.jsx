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
        <ReactCSSTransitionGroup
            transitionName="navbar"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>

          <div className="navWide">
              <div className="nav-logo">
                <a href="#"><strong> SOAP </strong></a>
              </div>
              <div className="nav-items">
                  <a href="">CONCEPT</a>
                  <a href="">PODCAST</a>
                  <a href="">CONTACT</a>
              </div>
          </div>
        </ReactCSSTransitionGroup>
      </nav>
    </div>


      
    );
  }
}