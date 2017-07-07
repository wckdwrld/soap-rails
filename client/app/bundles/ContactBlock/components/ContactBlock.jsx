
import PropTypes from 'prop-types';
import React from 'react';


export default class ContactBlock extends React.Component {

  render() {
    return (
      <div className = "contact-block">
        <div className="contact-wrapper">
          <div className="contact-form-left">
          </div>
          <p id = "vertical-block-seperator">
            -----------------------------
          </p>
          <div className="contact-form-right">
          </div>
        </div>
      </div>
    );
  }
}
