import React, { Component } from 'react';
import Header from './components/Header/header'
import About from './components/About/about'
import Features from './components/Features/features'

import BusinessPropositions from './components/BusinessValue/business_value'

class App extends Component {
 render() {
  return (
   <div>
    <Header />
    <About />
    <BusinessPropositions />
    <Features />
   </div>
   );
 }
}

export default App;
