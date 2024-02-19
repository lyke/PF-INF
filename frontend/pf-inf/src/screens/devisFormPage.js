import Navbar from "../components/navbar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function DevisFormPage(id) {


  return (
    <div>
      <Navbar />
      <div className='contact-container' >
        <h1>Demander un devis</h1>
        <form className='contact-form' >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="object">Prestation:</label>
          <input type="text" id="object" name="object" />
          <label htmlFor="message">Qty:</label>
          <input className="contact-message-input" type="text" id="message" name="message" />
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
