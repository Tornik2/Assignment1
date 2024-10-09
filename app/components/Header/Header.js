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
    <header>
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

        <nav className={`navigation ${isMenuActive && "active"}`}>
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
          <div className="language_switcher">GEO</div>
        </nav>
      </div>
    </header>
  );
}
