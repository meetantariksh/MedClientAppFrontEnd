/**
*
* ContactUsComponent
*
*/

import React from 'react';
// import styled from 'styled-components';


class ContactUsComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      nameError: false,
      nameErrorText: '',
      emailError: false,
      emailErrorText: '',
      phoneError: false,
      phoneErrorText: '',
      messageError: false,
      messageErrorText: '',
      name: '',
      email: '',
      phone: '',
      message: '',
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
  }

  submitForm(e){
    e.preventDefault();
    let validForm = true;
    if(!this.validateData(this.state.name, 'name')){
      validForm = false;
      this.setState({
        nameError: true,
        nameErrorText: 'Please Enter Your Name.'
      });
    }
    if(!this.validateData(this.state.phone, 'phone')){
      validForm = false;
      this.setState({
        phoneError: true,
        phoneErrorText: 'Please Enter A Valid Phone Number.'
      });
    }
    if(!this.validateData(this.state.email, 'email')){
      validForm = false;
      this.setState({
        emailError: true,
        emailErrorText: 'Please Enter A Valid Email.'
      });
    }
    if(!this.validateData(this.state.message, 'message')){
      validForm = false;
      this.setState({
        messageError: true,
        messageErrorText: 'Please Enter A Message For Us.'
      });
    }
    if(validForm){
      console.log('Form Valid');
    }
  }

  onChangeName(event){
    let name = event.target.value;
    if(this.validateData(name, 'name')){
      this.setState({
        nameError: false,
        name: name
      });
    }else{
      this.setState({
        nameError: true,
        nameErrorText: 'Please Enter Your Name.'
      });
    }
  }

  onChangeEmail(event){
    let email = event.target.value;
    if(this.validateData(email, 'email')){
      this.setState({
        emailError: false,
        email: email
      });
    }else{
      this.setState({
        emailError: true,
        emailErrorText: 'Please Enter A Valid Email.'
      });
    }
  }

  onChangePhone(event){
    let phone = event.target.value;
    if(this.validateData(phone, 'phone')){
      this.setState({
        phoneError: false,
        phone: phone
      });
    }else{
      this.setState({
        phoneError: true,
        phoneErrorText: 'Please Enter A Valid Phone Number.'
      });
    }
  }

  onChangeMessage(event){
    let message = event.target.value;
    if(this.validateData(message, 'message')){
      this.setState({
        messageError: false,
        message: message
      });
    }else{
      this.setState({
        messageError: true,
        messageErrorText: 'Please Enter A Message For Us.'
      });
    }
  }

  validateData(data, dataType){
    switch(dataType){
      case 'name': {
        if(data && data !== ''){
          return true;
        }else{
          return false;
        }
      }
      case 'email': {
        if(data && data !== ''){
          let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
          if(data.match(mailFormat)){
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      }
      case 'phone': {
        if(data && data !== ''){
          let phoneFormat = /^\d{10}$/;
          if(data.match(phoneFormat)){
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      }
      case 'message': {
        if(data && data !== ''){
          return true;
        }else{
          return false;
        }
      }
      default: {
        return false;
      }
    }
  }

  render() {
    return (
      <div>
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Get in touch with us. We love to interact.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form id="contactForm" name="sentMessage" onSubmit={(e) => this.submitForm(e)} noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" id="name" type="text" placeholder="Your Name *" onChange={this.onChangeName}/>
                        {
                          this.state.nameError && 
                          <p className="help-block text-danger">{this.state.nameErrorText}</p>
                        }
                      </div>
                      <div className="form-group">
                        <input className="form-control" id="email" type="email" placeholder="Your Email *" onChange={this.onChangeEmail}/>
                        {
                          this.state.emailError && 
                          <p className="help-block text-danger">{this.state.emailErrorText}</p>
                        }
                      </div>
                      <div className="form-group">
                        <input className="form-control" id="phone" type="tel" placeholder="Your Phone (India Only)*" onChange={this.onChangePhone}/>
                        {
                          this.state.phoneError && 
                          <p className="help-block text-danger">{this.state.phoneErrorText}</p>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea className="form-control" id="message" placeholder="Your Message *" onChange={this.onChangeMessage}></textarea>
                        {
                          this.state.messageError && 
                          <p className="help-block text-danger">{this.state.messageErrorText}</p>
                        }
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ContactUsComponent.propTypes = {

};

export default ContactUsComponent;
