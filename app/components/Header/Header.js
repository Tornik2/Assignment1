import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header__wrapper__wrapper">
      <div className="header_wrapper">
        <div className="logo">LOGO</div>

        <nav className="navigation">
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/contact">
              <li>Contact us</li>
            </Link>
          </ul>
        </nav>
        <div className="language_switcher">GEO</div>
      </div>
    </header>
  );
}
