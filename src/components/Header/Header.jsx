import "./Header.css";

export function Header() {
  return (
    <div className="header__wrapper__wrapper">
      <div className="header_wrapper">
        <div className="logo">LOGO</div>

        <div className="navigation">
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
        </div>
        <div className="language_switcher">GEO</div>
      </div>
    </div>
  );
}
