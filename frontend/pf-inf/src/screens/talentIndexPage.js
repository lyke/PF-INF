import React, { useEffect, useState } from 'react';
import Navbar from "../components/navbar";

export default function TalentIndexPage() {
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/talents')
      .then(response => response.json())
      .then(data => setTalents(data));
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
