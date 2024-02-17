import React, { useEffect, useState } from 'react';
import Navbar from "../components/navbar";
import axios from 'axios';

export default function TalentShowPage(id) {

  // Appel à API avec Axios
  const [talents, setTalents] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/talents')
      .then(response => {
        console.log(response.data);
        setTalents(response.data.rows);
        });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='login-container' >
        <h1>Our Talents</h1>
        {talents.map(talent => (
          <div key={talent.id}>
            <h2>nom :{talent.firstName}</h2>

            {/* Affichez ici les informations du talent */}
          </div>
        ))}
      </div>
    </div>
  );
}
