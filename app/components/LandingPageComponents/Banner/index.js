/**
*
* Banner
*
*/

import React from 'react';
// import styled from 'styled-components';
import runFunc from '../../../externalJS/agency';


class Banner extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
    runFunc();
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Your Health</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#ourDoctors">Our Doctors</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#latestInMedicine">Nature At Its Best</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#aboutUs">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-heading text-uppercase">Welcome To Your Health!</div>
              <div className="intro-lead-in">Declaring the past, Diagnosing the present and Fortelling the future.</div>
              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
          </div>
        </header>

      </div>
    );
  }
}

Banner.propTypes = {

};

export default Banner;
