import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FaceBookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    comment: "",
  });
  // const [messages, setMessages] = useState([]);

  // function addMessages(newMessage) {
  // 	const updatedMessages = [...messages, newMessage];
  // 	setMessages(updatedMessages);
  // }

  console.log("form data: ", formData);
  // console.log(messages);
  //Post New Transaction to Server
  function handleSubmit(event) {
    event.preventDefault();

    fetch(" http://localhost:8000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => setFormData((formData) => ({ comment: "" })));
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
        <img src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhcm0lMjBhbmltYWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
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
          <label htmlFor="comment">Feedback</label>
          <textarea
            rows="1"
            placeholder="Enter feedback..."
            name="comment"
            required
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
          <button type="Submit">Send Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
