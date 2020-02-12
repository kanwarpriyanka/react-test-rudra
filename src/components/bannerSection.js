import React, { Component } from "react";
import mainBgImg from "../img/main-bg.jpg"

class BannerSection extends Component {
    
    render() {
      return (
        <React.Fragment>
        <div className="container-fluid banner">
    <div className="row h-100">
      <div className="col-md-12 h-100 px-0">
        <img className="img-fluid" style={{ "width" : "100%"}}  src={mainBgImg} />
        <div className="h-100 text-white position-absolute mainBg">
          <h2 className="font-roboto font-weight-normal">
          Stable, Strong, Safe</h2>
          <h6>Proin vel ex vitae urna faucibus tristique.</h6>
          <button className="btn btn-outline-dark py-sm-2 py-1 px-3 px-sm-5 my-1 my-sm-4" type="submit">Learn More</button>
        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
      );
    }
  }
  
 
  export default BannerSection;
  