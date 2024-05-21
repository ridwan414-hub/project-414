import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      Header
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/donar-list">Donar List</Link>
        </li>
        <li>
          <Link to="/committee">Committee</Link>
        </li>
        <li>
          <Link to="/provincial-committee">Provincial Committee</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/members">Members</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
        <li>
          <Link to="/join">Join</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
