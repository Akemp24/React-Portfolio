import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorFields, setErrorFields] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }

    // Perform any actions you want with the form data
    console.log('Form submitted:', { name, email, message });

    // Clear form inputs and show success message
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(true);

    // Reset the success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000); // Reset after 3 seconds
  };

  // Function to handle field blur (onBlur event)
  const handleBlur = (field) => {
    if (!field.trim() && !errorFields.includes(field)) {
      setErrorFields([...errorFields, field]);
    } else if (errorFields.includes(field)) {
      setErrorFields(errorFields.filter((errorField) => errorField !== field));
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      {isSubmitted && (
        <div className="success-message">Message sent successfully!</div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`form-input ${errorFields.includes('name') ? 'error' : ''}`}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur('name')}
          required // Required attribute
        />
        <input
          type="email"
          className={`form-input ${errorFields.includes('email') ? 'error' : ''}`}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email')}
          required // Required attribute
        />
        <textarea
          className={`form-input ${errorFields.includes('message') ? 'error' : ''}`}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleBlur('message')}
          required // Required attribute
        ></textarea>
        <button type="submit" className="submit-button">
          Submit
        </button>
        <p className="disclaimer-text">
          Please note that this contact form is currently for demonstration purposes only. Comments sent through this form will not be delivered to an email address. Actual functionality will be added soon.
       </p>
      </form>
    </div>
  );
}

export default Contact;