import React from 'react';
import InstagramEmbed from 'react-instagram-embed'
import ReactPlayer from 'react-player'
import {Button} from 'reactstrap'


export default class Portfolio extends React.Component {
  
  render() {
    return (
      <div>
        <div className="jumbotron video-container">
            <ReactPlayer url='https://vimeo.com/221771206' width="100%" height="90vh" />      
        </div>

        <div className="jumbotron promotion-jumbo">
          <h2>Promo</h2>
            <a href=""> Learn More! </a>
        </div>

        <div className="jumbotron document-jumbo">
        <h2>Document</h2>
        </div>

        <div className="jumbotron analytic-jumbo">
        <h2>Analytics</h2>
        </div>
        
      </div>
    );
  }
}