import React from "react";
import './ContactUs.css';

const ContactUs = () => {
  return (
      /*Insert popup (hidden until opened)*/
      <div className="popup-overlay" id="popupOverlay">
        <div className="popup" id="popup">
          <span className="close" id="closePopup">&times;</span>
          <div className="popup-content">
            <h3>Contact Us</h3>
            <form id="contactUsForm" onSubmit="event.preventDefault();return false;" action="">
              <p style={{margin:"10px 0px", fontSize:"18px"}}>Please complete and submit this form<br/>and we will get back to you as soon as possible.</p>
              <div>
                <label for="firstname">First name: </label>
                <input type="text" title="firstname" placeholder="Enter your first name." id="firstNameInput" required/>                          
              </div>
              <div>
                <label for="lastname">Last name: </label>
                <input type="text" title="lastname" placeholder="Enter your last name" id="lastNameInput" required/>                            
              </div>
              <div>
                <label for="email">Email: </label>
                <input type="email" title="email" placeholder="Enter your email" id="emailInput" required/>
              </div>
              <div style={{marginBottom:"10px"}}>
                <label for="photo">Send us a photo: </label>
                <input style={{marginLeft: "20px"}} type="file" name="photoFile" id="photoFileInput"/>
              </div>
              <textarea rows="15" cols="80" placeholder="Enter your message" id="messageInput" required></textarea>
              <input type="checkbox" name="newsletter" id="newsletterInput" checked/><br/>
              <button type="submit" id="submitFormButton">Submit</button>
            </form>                            
            <p id="contactUsConfirm" style={{display:"none", margin:"10px 0px", fontSize:"18px"}}>Your form has been submitted.<br/>Thank you.</p>          
          </div>
        </div>
      </div>
  );
};

export default ContactUs;