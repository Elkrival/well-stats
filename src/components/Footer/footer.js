import React from 'react';
import logo from '../../img/wellstat_logo.png';

const Footer = () =>{
 return(
  <footer className="footer" id="bussines_value">
   <div className="footer__logo-box">
    <img src={ logo } alt="logo_image" className="footer__logo"/>
   </div>
   <div className="row">
    <div className="col-1-of-2">
     <div className="footer__navigation">
      <ul className="footer__list">
      <li className="footer__item">
       <a href="#company" className="footer__link">Company</a>
      </li>
      <li className="footer__item">
       <a href="#about" className="footer__link">About us</a>
      </li>
      <li className="footer__item">
       <a href="#business_value" className="footer__link">Busines Value</a>
      </li>
      <li className="footer__item">
       <a href="#features" className="footer__link">Features</a>
      </li>
      <li className="footer__item">
       <a href="#industries" className="footer__link">Industries</a>
      </li>
     </ul>
     </div>
    </div>
     <div className="col-1-of-2">
      <p className="footer__copyright">
       <br />
      Copyright©2017 WellStats
      </p>
     </div>
   </div>
  </footer>
 )
}

export default Footer
