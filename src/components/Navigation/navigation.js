import React from 'react'

const Navigation = () =>{
 return(
  <div className="navigation">
  <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
  <label className="navigation__button" htmlFor="navi-toggle">
   <span className="navigation__icon">&nbsp;</span>
  </label>
  <div className="navigation__background">
   &nbsp;
  </div>
   <nav className="navigation__nav">
    <ul className="navigation__list">
    <li className="navigation__item" ><a href="#company" className="navigation__link"><span>01</span>Home</a></li>
    <li className="navigation__item" ><a href="#about" className="navigation__link"><span>02</span>About</a></li>
    <li className="navigation__item"><a href="#business_value" className="navigation__link"><span>03</span>Business Value</a></li>
    <li className="navigation__item" ><a href="#features" className="navigation__link"><span>04</span>Features</a></li>
    <li className="navigation__item"><a href="#industries" className="navigation__link"><span>05</span>Industries</a></li>
    <li className="navigation__item"><a href="#about" className="btn btn--white">Take The First Step</a></li>
    </ul>
   </nav>
  </div>
 )
}
export default Navigation
