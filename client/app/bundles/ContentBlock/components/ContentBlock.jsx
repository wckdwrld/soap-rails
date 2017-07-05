
import PropTypes from 'prop-types';
import React from 'react';

export default class ContentBlock extends React.Component {

  render() {
    return (
      <div className = "content-block">
        <p id = "block-seperator">
          -----------------------------
        </p>
        <div className="content-wrapper">
          <img className="content-image" src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/1382809_10152484059162334_1836528230_n.jpg?oh=534567ea3f02a27b184fec1aeb085bf2&oe=5A0D3103"></img>
          <p className="content-head"> Welcome To Our New Site! </p>
          <p className="content-body">
            This is our new site, lorem ipsum and crap just trying to make this rubbish
            across a few lines so I can get some column shit sorted, you know what Im
            throwing down? this is skitzing out because the bloody syntax highlighting
            thinks this is all inside some quotations. Now its not though because Ive
            had to sacrifice grammar for compiling.
          </p>
        </div>
        <p id = "block-seperator">
          -----------------------------
        </p>
      </div>



    );
  }
}
