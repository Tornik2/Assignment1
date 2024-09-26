import "./Header.css";

export function Header() {
  return (
    <header className="header__wrapper__wrapper">
      <div className="header_wrapper">
        <div className="logo">LOGO</div>

        <nav className="navigation">
          <ul>
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Away</li>
            </a>
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
