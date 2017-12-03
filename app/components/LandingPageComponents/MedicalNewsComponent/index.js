/**
*
* MedicalNewsComponent
*
*/

import React from 'react';
// import styled from 'styled-components';


class MedicalNewsComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <section id="latestInMedicine">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Nature Always wears the colors of spirit</h2>
                <h3 className="section-subheading text-muted">Its good to care about nature, afterall its part of your health.</h3>
              </div>
            </div>
          </div>

          <div className="row">
            {
              this.props.newsArray.map(
                function(news, index){
                  if(index <= 8){
                    return (
                      <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                          <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                            </div>
                          </div>
                          <img className="img-fluid" src={news.urlToImage} alt=""/>
                        </a>
                        <div className="portfolio-caption">
                          <h4>{news.title}</h4>
                          <p className="text-muted">By:- {news.author}</p>
                        </div>
                      </div>
                    )
                  }
                }
              )
            }
          </div>
        </section>
      </div>
    );
  }
}

MedicalNewsComponent.propTypes = {
  newsArray: React.PropTypes.array.isRequired,
};

export default MedicalNewsComponent;
