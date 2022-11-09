import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FaceBookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Contact.css";

function Contact({ onAddMessage }) {
  const [formData, setFormData] = useState({
    message: "",
  });

  //Post New Transaction to Server
  function handleSubmit(event) {
    event.preventDefault();

    fetch(" http://localhost:8000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => onAddMessage(data));
    console.log(formData);
  }
  function handleChange(event) {
    const key = event.target.name;
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  }
  return (
    <div className="contact">
      <div className="leftSide">
        <img src="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <div className="contactIcon">
          <InstagramIcon />
          <TwitterIcon />
          <FaceBookIcon />
          <LinkedInIcon />
        </div>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="message">Message</label>
          <textarea
            rows="1"
            placeholder="Enter message..."
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="Submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
