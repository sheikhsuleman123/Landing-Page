import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="main1">
        <div className="headerimg">
          <nav class="navbar navbar-expand-sm navbar-dark">
            <div className="container-fluid">
              <a class="navbar-brand" href="#">
                <span className="thin">thin</span>
                <span className="bold">
                  bl
                  <u>o</u>
                  ck
                </span>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-collapse"
              >
                ☰
              </button>
              <div class="collapse navbar-collapse" id="navbar-collapse">
                <ul class="nav navbar-nav ml-auto">
                  <li class="nav-item">
                  <a class="nav-link" style={{ color: "white" }} href="#">Our Solution</a>
                  </li>
                  <li class="nav-item">  
                  <a class="nav-link" style={{ color: "white" }} href="#"> Roadmap</a>
                  </li>
                  <li class="nav-item"> 
                  <a class="nav-link" style={{ color: "white" }} href="#">   API </a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" style={{ color: "white" }} href="#"> FAQ </a>
                  </li>
                  {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </li> */}
                  <button className="btn btn-sm btn-outline-light">
                    Contact Sales
                  </button>
                </ul>
              </div>
            </div>
          </nav>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-sm-6  center-div ">
              <h2 className="heading text-center">Automation for BlockChain</h2>
              <p className="text-center">
                Thinblock connects blockchain platform with third-party services
                <br /> to help you build smart application
              </p>
              <div className="row h-100 justify-content-center align-items-center">
              <button className="btn btn-light btn-sm ">Request Access </button>
              <button className="btn btn-sm blue">Docs </button>
              </div>
              <div className="center-img text-center">
                <img src="./center.png" className="img-fluid imgcss" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
