import React, { Component } from "react";
import testimonial1Img from "../img/testimonial1.jpg"
import testimonial2Img from "../img/testimonial2.jpg"
import facebookImg from "../img/facebook.svg"
import twitterImg from "../img/twitter.svg"
import googlePlusImg from "../img/google-plus.svg"
import linkedinImg from "../img/linkedin-logo.svg"
import quoteLeftImg from "../img/quote-left.svg"
class Testimonials extends Component {
    
    render() {
      return (
          <React.Fragment>
        <div className="container pb-5">
  <div className="row">
    <div className="col-md-12 text-center py-5">
      <h2 className="heading-text position-relative mb-4">
     Testimonials
    </h2>
  </div>
</div>
<div className="row Testimonials my-3 my-lg-5">
  <div className="col-md-12">
        <div id="blogCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#blogCarousel" data-slide-to="1"></li>
                        </ol>

                    
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-lg-6">
                                      <div className="d-sm-flex">

                                      <div className="test-monial">
                                       <img className="position-relative testimonialImg" src={ testimonial1Img } alt="Image" />
                                         <div className="quotes-testimonial text-center">
                                            <img className="img-fluid" style={{ "width" : "20px"}} src={quoteLeftImg}/>
                                     </div>
                                     </div>
                                       <div className="testimonial-detail py-4 pr-4">
                                        <h5>Alison Burgas</h5>
                                        <h6 className="position-relative">CEO</h6>
                                        <ul className="list-unstyled mt-3">
                                           <li className="list-inline-item mr-3">
                                            <img style={{ "width" : "15px"}} src={facebookImg} />
                                          </li>
                                          <li className="list-inline-item mr-3">
                                            <img style={{ "width" : "15px"}} src={twitterImg} />
                                          </li>
                                          <li className="list-inline-item mr-3">
                                            <img style={{ "width" : "15px"}} src={googlePlusImg} />
                                          </li>
                                          <li className="list-inline-item">
                                            <img style={{ "width" : "15px"}} src={linkedinImg} />
                                          </li>
                                        </ul>
                                        <p className="mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                                      </div>
                                    </div>
                                  </div>
                                     <div className="col-lg-6 mt-5 mt-lg-0">
                                      <div className="d-sm-flex">

                                      <div className="test-monial">
                                       <img className="position-relative testimonialImg" src={testimonial2Img}  alt="Image" 
                                        />
                                         <div className="quotes-testimonial text-center">
                                            <img className="img-fluid" style={{ "width" : "20px"}}  src={quoteLeftImg}/>
                                     </div>
                                     </div>
                                       <div className="testimonial-detail py-4 pr-4">
                                        <h5>Alison Burgas</h5>
                                        <h6 className="position-relative">CEO</h6>
                                        <ul className="list-unstyled mt-3">
                                           <li className="list-inline-item mr-3">
                                            <img style={{ "width" : "15px"}} src={facebookImg}/>
                                          </li>
                                          <li className="list-inline-item mr-3">
                                            <img style={{ "width" : "15px"}} src={twitterImg} />
                                          </li>
                                          <li className="list-inline-item mr-3">
                                            <img style={{ "width" : "15px"}} src={googlePlusImg} />
                                          </li>
                                          <li className="list-inline-item">
                                            <img style={{ "width" : "15px"}} src={linkedinImg} />
                                          </li>
                                        </ul>
                                        <p className="mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                                      </div>
                                    </div>
                                  </div>
                                  
                               
                            </div>
                       

                        </div>
                   
                     
                    </div>
                   
                </div>
              </div>
            </div>
          </div>
          </React.Fragment>
      );
    }
  }
  
 
  export default Testimonials;
  