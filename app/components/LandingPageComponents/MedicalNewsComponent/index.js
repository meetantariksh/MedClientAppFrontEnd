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
                        <a className="portfolio-link" data-toggle="modal" href={"#portfolioModal"+index}>
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
        {
          this.props.newsArray.map(
            function(news, index){
              if(index <= 8){
                return (
                  <div className="portfolio-modal modal fade" id={"portfolioModal"+index} tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                          <div className="lr">
                            <div className="rl"></div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-8 mx-auto">
                              <div className="modal-body">
                                <h2 className="text-uppercase">{news.title}</h2>
                                <p className="item-intro text-muted">By:- {news.author}</p>
                                <img className="img-fluid d-block mx-auto" src={news.urlToImage} alt="" />
                                <p>{news.description}</p>
                                <ul className="list-inline">
                                  <li>Source: {news.source.name}</li>
                                  <li>Client: Rogh InfoTech</li>
                                </ul>
                                <a target='_blank' href={news.url}>
                                  <button className="btn btn-primary" type="button">
                                    See Full Article</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            }
          )
        }
      </div>
    );
  }
}

MedicalNewsComponent.propTypes = {
  newsArray: React.PropTypes.array.isRequired,
};

export default MedicalNewsComponent;
