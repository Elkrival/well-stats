import React from 'react';

const ContactForm = () =>{
 return(
  <section className="section-contact" id="contact">
  <div className="row">
   <div className="contact">
    <div className="contact-form">
     <form className="form">
      <div className="col-2-of-4">
      <div className="u-margin-bottom-medium u-margin-top-small form--titles">
       <h3 className="heading-tertiary u-margin-bottom-small">
         For Questions or to Set Up an Informational Meeting
       </h3>
       <h3 className="heading-tertiary">
        Contact Us
       </h3>
      </div>
      <div className="form__group">
       <input type="text" placeholder="First Name" className="form-has-content form__input"/>
       <label htmlFor="first-name" className="form__label">First Name</label>
       <span className="form--focus-border"></span>
      </div>
      <div className="form__group">
       <input type="text" placeholder="Last Name" className="form__input form-has-content"/>
       <label htmlFor="last-name" className="form__label">Last Name</label>
       <span className="form--focus-border"></span>
      </div>
      <div className="form__group">
       <input type="text" placeholder="Email" className="form__input"/>
       <label htmlFor="email" className="form__label">Email</label>
       <span className="form--focus-border"></span>
      </div>
      <div className="form__group">
       <textarea placeholder="Send us a message" className="form__text" name="text" rows="15"></textarea>
      </div>
      </div>
     </form>
    </div>
   </div>
  </div>
  </section>
 )
}
export default ContactForm
