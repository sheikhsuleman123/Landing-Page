import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid secto">
        <div className="row footr">
          <div className="col-sm-5 col-xs-12 text-center righto">
          <div>
          <h2 className="link">Ready to get Started</h2>
          </div>
          <div className="link2">
          <h2>Get in touch or read the Docs</h2>
          </div>
          </div>
          <div className="col-sm-2"> </div>     
          <div className="col-sm-5 col-xs-12">
          <button className="btn btn-light styling">Request Access</button>
          <button className="btn styling2">Docs</button>
          </div>
          </div>
           

<div className="main9 container-fluid">
<div className="row justify-content-center align-items-center">
<div className="col-sm-5 col-xs-12">
<h3 className="lhead">thin <strong>block</strong></h3>
</div>

<div className="col-sm-2 col-xs-12 list-menun">
   <div className="m">Developers</div>
   <div className="n">Documentation</div>
   <div className="n">Github</div>
   <div className="n">API Stack</div>
 </div>

<div className="col-sm-2 col-xs-12 center-menu">
   <div className="m">Resources</div>
   <div className="n">Tearms & Conditions</div>
   <div className="n">Privacy Policy</div>
</div>

<div className="col-sm-2  col-xs-12 list-menun">
   <div className="m">SUPPORT</div>
   <div className="n"><a >Help Center</a></div>
   <div className="n"><a>Twiter</a></div>
   <div className="n"><a>Email</a></div>   
</div>
     <div className="col-sm-1">
       </div>
 </div>
 </div>
</div>

    );
  }
}

export default Footer;
