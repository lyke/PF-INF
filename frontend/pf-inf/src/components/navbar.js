import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav-container'>
      <Link to='/home'>Home</Link>
      <Link to='/talents'>Talents</Link>
      <ul style={{ display: 'none' }}>
        <li><Link to='/instagram'>Instagram</Link></li>
        <li><Link to='/tiktok'>TikTok</Link></li>
        <li><Link to='/youtube'>Youtube</Link></li>
        <li><Link to='/facebook'>Facebook</Link></li>
        <li><Link to='/snapchat'>Snapchat</Link></li>
        <li><Link to='/x'>X</Link></li>
        <li><Link to='/linkedin'>LinkedIn</Link></li>
      </ul>
      <Link to='/contact'>Contact</Link>
      <Link to='/connection'>Connection</Link>
      <Link to='/inscription'>Inscription</Link>
    </div>
  );
}
