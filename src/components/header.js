import React, { Component } from "react";
import phoneImg from "../img/phone.svg"
import facebookImg from "../img/facebook.svg"
import twitterImg from "../img/twitter.svg"
import googlePlusImg from "../img/google-plus.svg"
import linkedinImg from "../img/linkedin-logo.svg"
import logoImg from "../img/logo.png"
class Header extends Component {
    
    render() {
      return (
          <React.Fragment>
         <header className="py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-right">
          <ul className="list-unstyled text-right mb-0">
            <li className="list-inline-item mr-2 mr-sm-4">
              <img src={phoneImg} style={{ "width" : "15px"}} /> <span className="ml-1">+91 254-5869-587</span>
            </li>
            <li className="list-inline-item mr-2 mr-sm-3">
              <img style={{ "width" : "18px"}} src={ facebookImg} />
            </li>
            <li className="list-inline-item mr-2 mr-sm-3">
              <img style={{ "width" : "18px"}} src={twitterImg} />
            </li>
            <li className="list-inline-item mr-2 mr-sm-3">
              <img style={{ "width" : "18px"}} src={ googlePlusImg} />
            </li>
            <li className="list-inline-item">
              <img style={{ "width" : "18px"}}  src={linkedinImg} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
        <div className="container">
        <div className="row">
          <div className="col-md-12 pr-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
              <a className="navbar-brand" href="#">
                <img src={logoImg} />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mb-0">
                  <li className="nav-item active"> <a className="nav-link py-lg-4 py-2 text-white" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item"> <a className="nav-link py-lg-4 py-2 text-white" href="#">About Us</a>
                  </li>
                  <li className="nav-item"> <a className="nav-link py-lg-4 py-2 text-white" href="#">Portfolio</a>
                  </li>
                  <li className="nav-item"> <a className="nav-link py-lg-4 py-2 text-white" href="#">Blog</a>
                  </li>
                  <li className="nav-item"> <a className="nav-link py-lg-4 py-2 text-white" href="#">Contact</a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <button className="btn btn-danger my-2 my-sm-0 px-4" type="submit">Get In Touch</button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
      </React.Fragment>
      );
    }
  }
  
 
  export default Header;
  