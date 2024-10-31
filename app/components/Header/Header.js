"use client";
import "./Header.css";
import "./hamburger.css";

import { useState } from "react";
import Link from "next/link";
// import Link from "next/link";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState("");
  function toggleMenu() {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <header className="padding__header__footer">
      <div className="header_wrapper">
        <div className="logo">LOGO</div>
        <div
          onClick={toggleMenu}
          className={`header_menu-button ${isMenuActive && "active"}`}
          id="menuToggle"
        >
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
        </div>

        <div className={`right__header ${isMenuActive && "active"}`}>
          <div className="profile__container padding__header__footer">
            <div style={{ width: "max-content" }}>
              <a href="/api/auth/login">Login</a> /
              <a href="/api/auth/logout">Log out</a>
            </div>
          </div>

          <nav className={`navigation`}>
            <ul>
              <Link
                onClick={() => setIsMenuActive(false)}
                className=""
                href="/"
              >
                <li className="nav-list__item main__padding__sides ">Home</li>
              </Link>
              <Link
                onClick={() => setIsMenuActive(false)}
                className=""
                href="/about"
              >
                <li className="nav-list__item main__padding__sides">About</li>
              </Link>
              <Link onClick={() => setIsMenuActive(false)} href="/products">
                <li className="main__padding__sides nav-list__item">
                  Products
                </li>
              </Link>
              <Link onClick={() => setIsMenuActive(false)} href="/blogs">
                <li className="main__padding__sides nav-list__item">Blogs</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
