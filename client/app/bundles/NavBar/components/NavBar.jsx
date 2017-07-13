import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
		toggle_welcome:true
    }
	this.toggleMenu = this.toggleMenu.bind(this)
  }

  getInitialState() {
		  return {
			toggle_welcome: true
		  };
  }

  componentDidUpdate() {
		  console.log("Did update: " + this.state.toggle_welcome)
  }

  toggleMenu() {
  	this.setState(() => ({
			toggle_welcome:false
		})
	);

  }


  render() {

		let navLinks = null;
		let navLogo = null;
		if (this.state.toggle_welcome) {
						navLinks = 
   						<div className="nav-items">
   							<a onClick={this.toggleMenu}>concept</a>
								<a href="podcast">podcast</a>
    						<a href="contact">contact</a>
     					</div>;

						navLogo =
								<div className="nav-logo">
									<a href=""><strong> SOAP </strong></a>
								</div>;
		}
		else {
						navLinks = null;

						navLogo =
								<div className="nav-logo nav-logo-toggle">
									<a href=""><strong> SOAP </strong></a>
								</div>;
		}
		
   	return (
    	<div id="navblock">
      		<nav id="navbar">
          		<div className="navWide">
					<ReactCSSTransitionGroup
					transitionName = 'logo-slide'
					transitionEnterTimeout = {1000}
					transitionLeaveTimeout = {1000}
					>
						{navLogo}
					</ReactCSSTransitionGroup>

					<ReactCSSTransitionGroup
					transitionName = 'nav-slide'
					transitionEnterTimeout = {500}
					transitionLeaveTimeout = {1000}
					>
						{navLinks}
					</ReactCSSTransitionGroup>
          		</div>
      		</nav>
    	</div> 
    	);
  }

}
