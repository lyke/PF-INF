
export default function Navbar() {
  return (
    <div className='nav-container'>
      <button>Home</button>
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
