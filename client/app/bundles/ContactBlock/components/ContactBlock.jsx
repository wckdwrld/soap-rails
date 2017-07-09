
import PropTypes from 'prop-types';
import React from 'react';


export default class ContactBlock extends React.Component {

  render() {
    return (
      <div className = "contact-block">
        <div className="contact-wrapper">
          <div className="contact-form-left">
            <p className="contact-head">
              PODCAST
            </p>
            <div className="contact-body">
              For all podcast enquiries, including interview requests, clarifications ect.
              <p className="contact-body-email">
                podcast@soap.productions
              </p>
              <p className="contact-body-phone">
                +61 432 061 92
              </p>
            </div>
          </div>
          <div className="contact-form-right">
            <p className="contact-head">
              HIRE US
            </p>
            <div className="contact-body">
              Let's work together! Here at SOAP we aim to provide high quality content 
              specialized for you!
              <p className="contact-body-email">
                work@soap.productions
              </p>
              <p className="contact-body-phone">
                +61 432 061 92
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
