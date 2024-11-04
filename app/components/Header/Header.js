"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

import "./Header.css";
import "./hamburger.css";

import { useState } from "react";
import Link from "next/link";
// import Link from "next/link";

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const { user, isLoading } = useUser();
  console.log(isLoading ? "loading" : user);
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
              {isLoading ? (
                " "
              ) : !isLoading && user ? (
                <div className="nav__profile">
                  <p>PROFILE</p>
                  <ul className="profile__nav__desktop">
                    <li>My Orders</li>
                    <li>History</li>
                    <li>Account Settings</li>
                    <a className="logout__btn__desktop" href="/api/auth/logout">
                      <li>Logout</li>
                    </a>
                  </ul>
                </div>
              ) : (
                <a className="login__btn__desktop" href="/api/auth/login">
                  Login
                </a>
              )}
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
              {user ? (
                <a className="logout__btn__mobile" href="/api/auth/logout">
                  <li className="main__padding__sides nav-list__item ">
                    Logout
                  </li>
                </a>
              ) : (
                <a className="login__btn__mobile" href="/api/auth/login">
                  <li className="main__padding__sides nav-list__item ">
                    Log in
                  </li>
                </a>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
