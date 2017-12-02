/**
*
* RecomendationComponent
*
*/

import React, { ReactPropTypes } from 'react';


class RecomendationComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <section id="ourDoctors">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Few Words Of Praise</h2>
              <h3 className="section-subheading text-muted">Because everyone needs an ego boost.</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
                <ul className="timeline">
                  {
                    this.props.recomendations.map(
                      function(recomendation, index){
                        return <div>
                                  <li>
                                    <div className="timeline-image">
                                      {
                                        recomendation.imageUrl || recomendation.imageUrl !== '' && <img className="rounded-circle img-fluid" src={recomendation.imageUrl} alt=""/>
                                      }
                                      {
                                        !recomendation.imageUrl || recomendation.imageUrl === '' && <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
                                      }
                                    </div>
                                    <div className="timeline-panel">
                                      <div className="timeline-heading">
                                        <h4>{recomendation.name}</h4>
                                        <h3 className="subheading">{recomendation.qualification}</h3>
                                      </div>
                                      <div className="timeline-body">
                                        <p className="text-muted">{recomendation.recomendationQuote}</p>
                                      </div>
                                    </div>
                                  </li>
                              </div>
                      }
                    )
                  }
                  
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>Be Part
                        <br/>Of Our
                        <br/>Story!</h4>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        </section>
      </div>
    );
  }
}

RecomendationComponent.propTypes = {
    recomendations: ReactPropTypes.obect.isRequired,
};

export default RecomendationComponent;
