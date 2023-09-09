import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // State for success message
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
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
    }, 3000); // Reset after 3 seconds
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
          className="form-input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="form-input"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;