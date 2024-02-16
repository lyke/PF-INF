import Navbar from "../components/navbar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function SignInPage() {

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
      <div className='login-container' >
        <h1>Sign In Page</h1>
        <form className='login-form' >
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
          <br />
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" />
          <br />
          <label htmlFor="picture">Picture:</label>
          <input type="text" id="picture" name="picture" />
          <br />
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
