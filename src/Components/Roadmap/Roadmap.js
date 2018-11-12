import React, { Component } from 'react';
import './Roadmap.css';

class Roadmap extends Component {
  render() {
    return (
      <div className="container-fluid road-main">
        <div className="row justify-content-center align-items-center">
           <div className="col-md-12 col-xs-12">
            <div className="text-center data">
            <h2>Roadmap</h2>
    <p id="par">We have a lot of exciting <br/>stuff coming Stay tuned!</p>

  <span id="bold">2017 </span><span class="vl"></span> <i class="far fa-circle cir1"></i> <span id="bold"> November :</span> <span id="light"> Early Stage Concept</span>
 
  <div className="vl2">
  <span id="bold">2018 </span><span class=""></span> <i class="far fa-circle"></i> <span id="bold"> April :</span> <span id="light"> Concept Validation</span><br/>
 <span class="dist"> <i class=" july" ></i> <span id="bold" > July :</span> <span id="light"> Concept Validation</span><br/>
 </span>
  <i class=" November"></i> <span id="bold"> Novemvber :</span> <span id="light"> Concept Validation</span><br/>
  <br/>
<div class="v3">
  <span id="bold">2019 </span><span class=""></span> <i class="far fa-circle cir1"></i> <span id="bold"> March :</span> <span id="light"> Firt MVP with UI</span>
 <br/> 
 <div class="v4">
 <span id="bold"> March :</span> <span id="light"> Early Stage Concept</span>
 </div>
  </div>
  </div>
  
  
   </div>
    </div>
  </div>
</div>
    );
  }
}

export default Roadmap;
