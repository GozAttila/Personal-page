import React, { useState } from "react";

const ContactForm = () => {
//   const [status, setStatus] = useState("Submit");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("Submit");
//     let result = await response.json();
//     alert(result.status);
//   };
  return (
    // <form onSubmit={handleSubmit}>
    <form name="contact" method="POST" action="/contact">
        <input type="hidden" name="form-name" value="contact" />
      <div>
        <label className="contactFormLabel" htmlFor="name">
          Name:
        </label>
        <input className="contactFormInput" type="text" name="name" id="name" required />
      </div>
      <div>
        <label className="contactFormLabel" htmlFor="email">
          Email:
        </label>
        <input className="contactFormInput" type="email" name="email" id="email" required />
      </div>
      <div>
        <label className="contactFormLabel" htmlFor="message">
          Message:
        </label>
        <textarea className="contactFormInput" name="message" id="message" required />
      </div>
      <button className="contactFormButton" type="submit">
        {/* {status} */}
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
