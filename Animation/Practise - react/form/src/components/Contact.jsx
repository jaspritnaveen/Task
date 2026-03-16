import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      alert(res.data.message);
      setFormData({ name: "", email: "", message: "" }); // clear form
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <div className="contact-container">
      <h1>📞 Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
