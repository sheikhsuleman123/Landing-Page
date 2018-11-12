import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Activity from './Components/Activity/Activity.js';
import Event from './Components/Event/Event.js';
import Execution from './Components/Execution/Execution.js';
import Gallery from './Components/Gallery/Gallery.js';
import Roadmap from './Components/Roadmap/Roadmap.js';
import Footer from './Components/Footer/Footer.js';


class App extends Component {
  render() {
    return (
    <div >
     <Header />
     <Gallery />
     <Event/>
     <Activity/>
     <Execution/>
     <Roadmap/>
     <Footer/>
      </div>
  
    );
  }
}

export default App;
