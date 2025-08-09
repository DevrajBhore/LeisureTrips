import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/images/LTlogo.png"; // update to your logo path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="LTlogo" onClick={closeMenu}>
          <img src={logo} alt="NomadGym Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/login"  onClick={closeMenu}>Login</Link>
          <Link to="/Register" className="btn-login" onClick={closeMenu}>Register</Link>
        </nav>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
