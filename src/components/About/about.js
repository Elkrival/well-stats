import React from 'react';
import logo from '../../img/wellstat_logo.png'
const About = () =>{
 return(
  <section className="section-about">
   <div className="u-center-text u-margin-bottom-big">
    <h2 className="heading-secondary">
     Alone we can do so little; together we can do so much. – Hellen Keller
    </h2>
   </div>
   <div className="row">
    <div className="story">
     <figure className="story__shape">
      <img src={ logo } alt="logo" className="story__img"/>
      <figcaption className="story__caption">Comprehensive</figcaption>
     </figure>
     <div className="story__text">
      <h3 className="heading-tertiary margin-bottom-small">
       Comprehensive Services
      </h3>
      <p> WellStats understand that in the world of Human and Health services it is always a juggling act between massive budget cuts, increased regulartions, and porivinding the most vulnerable populations with exceptaional care. <a href="#here" className="btn-text">Take the first step &rArr;</a></p>
     </div>
    </div>
   </div>
   <div className="row">
    <div className="story">
     <figure className="story__shape">
      <img src={ logo } alt="logo" className="story__img"/>
      <figcaption className="story__caption">For you.</figcaption>
     </figure>
     <div className="story__text">
      <h3 className="heading-tertiary margin-bottom-small">
       With you in mind.
      </h3>
      <p>
       Deisgned by professionals in the industry, WellStats is here to partner with your agency on transformative technology solutions that fit your needs and help your agency thrive.
       <a href="#here" className="btn-text">Take the first step &rArr;</a>
      </p>
     </div>
    </div>
   </div>
  </section>
 )
}

export default About
