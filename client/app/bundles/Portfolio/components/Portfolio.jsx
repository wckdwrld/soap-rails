import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class NavPanel extends React.Component {

    getInitialState() {
       return { 
        showDocument : true, 
        showPromote  : false,
        showOptimize : false
      };
    }

    toggleShowDocument() {
       this.setState({ 
        showDocument : true,
        showPromote  : false,
        showOptimize : false
      });
    }

    toggleShowPromote() {
       this.setState({ 
        showDocument : false,
        showPromote  : true,
        showOptimize : false
      });
    }

    toggleShowOptimize() {
       this.setState({ 
        showDocument : false,
        showPromote  : false,
        showOptimize : true
      });
    } 

    constructor() {
      super()
      this.state = this.getInitialState();
      this.toggleShowDocument = this.toggleShowDocument.bind(this);
      this.toggleShowPromote = this.toggleShowPromote.bind(this);
      this.toggleShowOptimize = this.toggleShowOptimize.bind(this);

    }

  render() {  
    if(this.state.showDocument){
      return (
        <div>
        <InfoPanel currState="showDocument"/>

        <Nav vertical className="nav-panel-links col-lg-2 offset-lg-10">
            <NavItem>
              <NavLink className="nav-panel-selected" onClick={this.toggleShowDocument} href="#"> Document </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.toggleShowPromote} href="#"> Promote </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.toggleShowOptimize} href="#"> Optimize </NavLink>
            </NavItem>
        </Nav>
      </div>


        );
    }

    else if(this.state.showPromote) {
      return (
        <div>
        <InfoPanel currState="showPromote"/>

        <Nav vertical className="nav-panel-links col-lg-2 offset-lg-10">
            <NavItem>
              <NavLink onClick={this.toggleShowDocument} href="#"> Document </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-panel-selected" onClick={this.toggleShowPromote} href="#"> Promote </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.toggleShowOptimize} href="#"> Optimize </NavLink>
            </NavItem>
        </Nav>
      </div>


      );
    }

    else if(this.state.showOptimize) {
      return (
        <div>
        <InfoPanel currState="showOptimize" />

        <Nav vertical className="nav-panel-links col-lg-2 offset-lg-10">
            <NavItem>
              <NavLink onClick={this.toggleShowDocument} href="#"> Document </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.toggleShowPromote} href="#"> Promote </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-panel-selected" onClick={this.toggleShowOptimize} href="#"> Optimize </NavLink>
            </NavItem>
        </Nav>
      </div>


      );
    }
  }
}

class InfoPanel extends React.Component {
  

  render() {
    if(this.props.currState == "showDocument"){
      return (

            <div>
              <h1>Document Panel</h1> 
            </div>


      );
    }
    else if(this.props.currState == "showPromote"){
      return (
          <div>
            <h1> Promote Panel </h1>
          </div>
      );
    }

    else if(this.props.currState == "showOptimize"){
      return (
          <div>
            <h1> Optimize Panel </h1>
          </div>
      );
    }

  }
}

class VideoPanel extends React.Component {
  render() {
    return (

      <video autoplay loop id="video-background" muted plays-inline z-index="-100">
        <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4" />
      </video>
   
      );
  }
}

export default class Portfolio extends React.Component {
  
  getInitialState() {
       return {
        showVideoPanel : true,
        showInfoPanel  : false
      };
  }

  togglePanel() {
    this.setState({
        showVideoPanel : false,
        showInfoPanel  : true
    });
  }


  constructor() {
      console.log('re-render')
      super()
      this.state = this.getInitialState();
      this.togglePanel = this.togglePanel.bind(this);

    }

  render() {
    if (this.state.showVideoPanel){
      return (
          <div>
          <VideoPanel />
          <a onClick={this.togglePanel}> learn more </a>
          </div>
      );
    }

    else if (this.state.showInfoPanel) {
      return (
      
        <NavPanel />

      );
    }
  }
}