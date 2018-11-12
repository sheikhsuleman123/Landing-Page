import React, { Component } from 'react';
import './Activity.css';

class Activity extends Component {
  render() {
    return (
    <div className="container-fluid activityo">
    <div className="row">
    <div className="col-sm-1">
       </div>
      <div className="col-md-5 col-xs-6">
      <div className="img">
      <img src="./img3.png" id="img3" className="img-fluid"></img>
      </div>
       </div>
      <div className="col-md-6 col-xs-6">
        <h2><strong>Execution actions and get notified <br/>when triggers are activited</strong>
        </h2>  <br/>
        <img src="./code1.png" className="img-fluid inner"></img>
        </div>
      </div>
  </div>
    );
  }
}

export default Activity;
