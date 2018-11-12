import React, { Component } from 'react';
import './Event.css';

class Event extends Component {
  render() {
    return (
      <div className="container-fluid third">
      <div className="row back-img">
      
      
      <div className="col-sm-7 col-xs-6"> 
      <h2 className="headE">Schedule triggers with different <br/>sources for events</h2>
       
        <img src="./code1.png" className="img-fluid code-img"></img>
      
      </div>
    <div className="col-sm-5 col-xs-6"> 
    <img src="./code2.png" className="img-fluid pic2"></img>
     </div>
    </div>
      
      
      
      </div>
    );
  }
}

export default Event;
