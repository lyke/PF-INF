
export default function Navbar() {
  // définir une fonction qui permet de renvoyer vers le composant App.js
  const redirectToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className='nav-container'>
      <button onClick={redirectToHome}>Home</button>
      {/* <button><a href="/">Home</a></button> */}
      <button>Talents</button>
        <ul style={{ display: 'none' }}>
          <li><button>Instagram</button></li>
          <li><button>TikTok</button></li>
          <li><button>Youtube</button></li>
          <li><button>Facebook</button></li>
          <li><button>Snapchat</button></li>
          <li><button>X</button></li>
          <li><button>LinkedIn</button></li>

        </ul>
      <button>Contact</button>
      <button>Connection</button>
      <button>Inscription</button>
    </div>
  );
}
