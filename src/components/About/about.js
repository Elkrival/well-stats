import React from 'react';


const About = () =>{
 return(
  <section className="section-about" id="about">
   <div className="u-center-text u-margin-bottom-small">
    <h2 className="heading-secondary u-margin-bottom-big">
     We Are Wellstats
    </h2>
   </div>
    <div className="row">
   <div className="col-1-of-2">
    <h3 className="heading-tertiary heading-tertiary--blue u-margin-bottom-small">
     COMPREHENSIVE SERVICES
    </h3>
    <p className="paragraph">
     WellStats understand that in the world of Human and Health services it is always a juggling act between massive budget cuts, increased regulartions, and porivinding the most vulnerable populations with exceptaional care.
    </p>
    <h3 className="heading-tertiary heading-tertiary--blue u-margin-bottom-small">
     WITH YOU IN MIND.
    </h3>
     <p className="paragraph">
      Deisgned by professionals in the industry, WellStats is here to partner with your agency on transformative technology solutions that fit your needs and help your agency thrive.
     </p>
     <a href="3" className="btn-text">
      Take the First Step &rArr;
     </a>
   </div>
   <div className="col-1-of-2">
    <div className="composition">
     <div className="composition__card composition__card--c1 card ">
      <div className="card__side card__side--front card__side--front--about">
       <div className="card__picture card__picture--1">
        &nbsp;
       </div>
      <h4 className="card__heading">
       <span className="card__heading-span card__heading-span--1"> Integrated and Sustainable Systems</span>
      </h4>
     </div>
    </div>
    <div className="composition__card composition__card--c2 card">
      <div className="card__side card__side--front card__side--front--about">
       <div className="card__picture card__picture--2">
        &nbsp;
       </div>
       <h4 className="card__heading">
        <span className="card__heading-span card__heading-span--2"> Effective and Efficient Workflows</span>
       </h4>
      </div>
     </div>
 <div className="composition__card composition__card--c3 card ">
      <div className="card__side card__side--front card__side--front--about">
       <div className="card__picture card__picture--3">
        &nbsp;
       </div>
       <h4 className="card__heading">
        <span className="card__heading-span card__heading-span--3"> Data Driven Predictive Analysis</span>
       </h4>
      </div>
     </div>
    </div>
   </div>
  </div>
  </section>
 )
}

export default About
