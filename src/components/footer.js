import React, { Component } from "react";
import footerlogoImg from "../img/footer-logo.png"

class Footer extends Component {
    
    render() {
      return (
        <footer className=" py-2">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3 text-md-right text-center">
                        <img src={footerlogoImg}/>
                      </div>
                      <div className="col-md-9 text-md-right text-center pt-2">
                        <ul className="list-unstyled mb-0">
                          <li className="list-inline-item mr-4">Home</li>
                          <li className="list-inline-item mr-4">About Us</li>
                          <li className="list-inline-item mr-4">Portfolio</li>
                          <li className="list-inline-item mr-4">Blog</li>
                           <li className="list-inline-item">Contact</li>
                         </ul>
                        
                      </div>
                    </div>
                  </div>
                </footer>
      );
    }
  }
  
 
  export default Footer;
  