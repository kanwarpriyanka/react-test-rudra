import React, { Component } from "react";
import services1Img from "../img/service1.png"
import services2Img from "../img/service2.png"
import services3Img from "../img/service3.png"
import services4Img from "../img/service4.png"
class ContentSection extends Component {
    
    render() {
      return (
        <div className="container welcome">
    <div className="row">
      <div className="col-md-12 text-center py-xs-5 py-2">
        <h2 className="heading-text position-relative mb-4">
      Welcome To PS Building Contractors LTD
    </h2>
        <p className="mt-4 pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6 text-center py-xs-4 py-2">
        <div className="service p-4">
          <img className="mb-3" src={services1Img} />
          <h6 className="text-uppercase">Lorem Ipsum</h6>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 text-center py-xs-4 py-3">
        <div className="service p-4">
          <img className="mb-3" src={ services2Img} />
          <h6 className="text-uppercase">Lorem Ipsum</h6>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 text-center py-xs-4 py-3">
        <div className="service p-4">
          <img className="mb-3" src={services3Img} />
          <h6 className="text-uppercase">Lorem Ipsum</h6>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 text-center py-xs-4 py-3">
        <div className="service p-4">
          <img className="mb-3" src={services4Img} />
          <h6 className="text-uppercase">Lorem Ipsum</h6>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
    </div>
  </div>
      );
    }
  }
  
 
  export default ContentSection;
  