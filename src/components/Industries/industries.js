import React from 'react';

const Industries = () =>{
 return(
  <section className="section-industries" id="industries">
   <div className="u-center-text u-margin-bottom-big">
    <h2 className="heading-secondary">Industries Served</h2>
   </div>
   <div className="row">
    <div className="col-1-of-3">
     <div className="card">
      <div className="card__side card__side--front card__side--front--flip">
       <div className="card__picture card__picture--4">
        &nbsp;
       </div>
       <h4 className="card__heading">
         <span className="card__heading-span card__heading-span--2">
         Disability Services
         </span>
       </h4>
      </div>
      <div className="card__side card__side--back card__side--back--industries card__side--back--flip card__side--back-1">
       <div className="card__cta">
        <div className="card__details">
         <ul>
          <li>Residential Support and Services</li>
          <li>Day Habilitation</li>
          <li>Community Habilitation</li>
          <li>SEMP/PRE-Vocation Services</li>
          <li>Individual Support Services</li>
         </ul>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="col-1-of-3">
     <div className="card">
      <div className="card__side card__side--front  card__side--front--flip">
       <div className="card__picture card__picture--5">
        &nbsp;
       </div>
       <h4 className="card__heading">
         <span className="card__heading-span card__heading-span--1">
         Children Services
         </span>
       </h4>
      </div>
      <div className="card__side card__side--back card__side--back--industries card__side--back--flip card__side--back-2">
       <div className="card__cta">
        <div className="card__details">
         <ul>
          <li>Foster Care</li>
          <li>Adoption Services</li>
          <li>Bridges to Health Waiver Programs</li>
         </ul>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="col-1-of-3">
     <div className="card">
      <div className="card__side card__side--front  card__side--front--flip">
       <div className="card__picture card__picture--6">
        &nbsp;
       </div>
       <h4 className="card__heading">
         <span className="card__heading-span card__heading-span--3">
         Home Care Services and Solutions
         </span>
       </h4>
      </div>
      <div className="card__side card__side--back card__side--back--industries card__side--back--flip card__side--back-3">
       <div className="card__cta">
        <div className="card__details">
         <ul>
          <li>Home Health Aide Services</li>
          <li>Visiting Nurses Services</li>
         </ul>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 )
}
export default Industries
