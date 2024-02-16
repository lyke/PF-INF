import Navbar from "../components/navbar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function ContactPage() {

  // definir la fonction qui va gérer la connexion en vérifiant si le username et le password sont corrects
  // si oui, rediriger vers la page d'accueil
  // si non, afficher un message d'erreur
  // const handleLogin = () => {
  //   // récupérer les valeurs des inputs
  //   const username = document.getElementById('username').value;
  //   const password = document.getElementById('password').value;
  //   // faire une requête POST à l'API pour vérifier si le username et le password sont corrects
  //   axios.post('http://localhost:5000/api/login', {
  //     username: username,
  //     password: password
  //   })
  //     .then(response => {
  //       console.log(response.data);
  //       // si le username et le password sont corrects, rediriger vers la page d'accueil
  //       // sinon, afficher un message d'erreur

  //     });
  // }
  return (
    <div>
      <Navbar />
      <div className='contact-container' >
        <h1>Contact Page</h1>
        <form className='contact-form' >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="object">Object:</label>
          <input type="text" id="object" name="object" />
          <br />
          <label htmlFor="message">Message:</label>
          <input className="contact-message-input" type="text" id="message" name="message" />
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
