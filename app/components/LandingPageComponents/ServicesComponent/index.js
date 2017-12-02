/**
*
* ServicesComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import '../../../styles/LandingPage/agency.min.css';

class ServicesComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">Let us know how we can help.</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Schedule an Appointment</h4>
                <p className="text-muted">Schedule an appointment with a doctor.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Online Diagnosis</h4>
                <p className="text-muted">Tell us what is ailing you and we will do our best best to help you. We can even schedule an appointment with a doctor near by.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Find a Doctor</h4>
                <p className="text-muted">Need to consult a pysician? let us help you find one.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ServicesComponent.propTypes = {

};

export default ServicesComponent;
