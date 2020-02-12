import React, { Component } from "react";

import oneImg from "../img/1.jpg"
import twoImg from "../img/2.jpg"
import threeImg from "../img/3.jpg"
import fourImg from "../img/4.jpg"
import fiveImg from "../img/5.jpg"
import sevenImg from "../img/7.jpg"
import eightImg from "../img/8.jpg"
class ProjectSection extends Component {
    
    render() {
      return (
        <div className="container">
        <div className="row">
          <div className="col-md-12 text-center py-4">
            <h2 className="heading-text position-relative mb-4">
          Projects
        </h2>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <img className="projectImg" src={oneImg} />
            <img className="projectImg" src={twoImg}/>
            <img className="projectImg" src={threeImg} />
            <img className="projectImg" src={fourImg} />
            <img className="projectImg" src={fiveImg} />
            <img className="projectImg" src={eightImg }/>
            <img className="projectImg" src={sevenImg} />
            <img className="projectImg" src={eightImg } />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <button className="btn btn-outline-dark py-2 px-5 my-4" type="submit">View More</button>
          </div>
        </div>
      </div>
      );
    }
  }
  
 
  export default ProjectSection;
  