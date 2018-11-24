import React, { Component } from 'react';
import './assets/css/App.css';

import Banner from "./components/home/banner";
import Union from "./components/home/union";
import Demand from "./components/home/demand";
import Profit from "./components/home/profit";
import O2o from "./components/home/o2o";
import Case from "./components/home/case";
import Contact from "./components/home/contact";
import Footer from "./components/home/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*header*/}
        {/*</header>*/}
        <Banner />
        <Union />
        <Demand />
        <Profit />
        <O2o />
        <Case />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
