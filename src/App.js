import React, { Component } from 'react';
import Header from './components/Header/header';
import About from './components/About/about';
import Features from './components/Features/features';
import Industries from './components/Industries/industries';
import BusinessPropositions from './components/BusinessValue/business_value';
import ContactForm from './components/Contact_Form/contact_form';
import Footer from './components/Footer/footer';
import Navigation from './components/Navigation/navigation'

class App extends Component {
 render() {
  return (
   <div>
    <Navigation />
    <Header />
    <About />
    <BusinessPropositions />
    <Features />
    <Industries />
    <ContactForm />
    <Footer />
   </div>
   );
 }
}

export default App;
