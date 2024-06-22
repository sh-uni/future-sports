import React,  { useState } from "react";
import './Navigation.css';

const Navigation = () => {
  // navigation items
  const [selectedNavItem, setSelectedNavItem] = useState("News");
  const navItems = [
    { id: 1, title: "News", name: "LatestNews" },
    { id: 2, title: "Events", name: "UpcomingEvents" },
    { id: 3, title: "Gallery", name: "Carousel" },
    { id: 4, title: "Social", name: "Social" },
  ];

  // contact us popup functionality
  function contactUsPopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopup = document.getElementById('closePopup');
    const submitFormButton = document.getElementById('submitFormButton');
    const contactUsForm = document.getElementById('contactUsForm');
    const contactUsConfirm = document.getElementById('contactUsConfirm');

    //const firstNameInput = document.getElementById('firstNameInput');
    //const lastNameInput = document.getElementById('lastNameInput');
    const emailInput = document.getElementById('emailInput');
    //const messageInput = document.getElementById('messageInput');
    //const photoFileInput = document.getElementById('photoFileInput');
    //const newsletterInput = document.getElementById('newsletterInput');

    // Function to open the popup
    function openPopup() {
        popupOverlay.style.display = 'block';
    }
    // Function to close the popup
    function closePopupFunc() {
        popupOverlay.style.display = 'none';
        contactUsConfirm.style.display = 'none';
        contactUsForm.style.display = 'block';
    }
    // Function to submit the signup form
    function submitForm() {
        const formObject = contactUsForm;
        //Only submit if required form fields are valid
        if (!formObject.checkValidity || formObject.checkValidity()){
            const email = emailInput.value;
            // Add your form submission logic here
            console.log(`Form submitted for: ${email}`);
            contactUsForm.style.display = 'none';
            contactUsConfirm.style.display = 'block';
            formObject.reset();
        }
    }
    // Event listeners
    // Trigger the popup to open (you can call this function on a button click or any other event)
    openPopup();
    // Close the popup when the close button is clicked
    submitFormButton.addEventListener('click', submitForm);
    // Close the popup when the close button is clicked
    closePopup.addEventListener('click', closePopupFunc);
    // Close the popup when clicking outside the popup content
    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            closePopupFunc();
        }
    });
    // You can customize and expand these functions based on your specific requirements.
  };

  return (
    <div className="Navigation">
      <ul className="NavigationMenus">
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setSelectedNavItem(item.name)}
              className={selectedNavItem === item.name ? `activeNavItem` : ""}
            >
              <a href={`#${item.name}`}>{item.title}</a>
            </li>
          );
        })}
        <li>
          {/* Insert 'contact us' button */}
          <button id="contact-us" style={{padding: "12px", fontSize: "14px"}} onClick={contactUsPopup}>Contact Us</button>
        </li>
      </ul>
    </div>
    );
};

export default Navigation;