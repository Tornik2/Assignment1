import "./Header.css";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="header__wrapper__wrapper">
      <div className="header_wrapper">
        <div className="logo">LOGO</div>

        <nav className="navigation">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <a href="">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
        <div className="language_switcher">GEO</div>
      </div>
    </header>
  );
}
