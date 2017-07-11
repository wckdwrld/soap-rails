
import PropTypes from 'prop-types';
import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class ContentBlock extends React.Component {

  render() {
    return (
      <div className = "content-block">
        <div className="content-wrapper">
          <img className="content-image" src={this.props.image}></img>
          <p className="content-head">{this.props.ep_number} : {this.props.title}</p>
          <p className="content-links"> 
            <a href="vimeo.com">video </a>
             /
            <a href="stitcher.com"> audio</a>
          </p>
          <p className="content-body">
	  	{this.props.text}
          </p>
        </div>
      </div>
    );
  }
}
