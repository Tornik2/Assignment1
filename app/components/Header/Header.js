"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTheme } from "../ThemeProvider";

import "./Header.css";
import "./hamburger.css";

import { useState } from "react";
import Link from "next/link";
// import Link from "next/link";

export default function Header() {
  const { user, isLoading } = useUser(); // get user info from auth)
  const { darkMode, toggleDarkMode } = useTheme(); // get theme info from theme Provider
  console.log(darkMode);
  const [isMenuActive, setIsMenuActive] = useState("");
  function toggleMenu() {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <header className="padding__header__footer dark:bg-gray-900 dark:text-gray-200">
      <div className="header_wrapper ">
        <Link href={"/"}>
          <div className="logo dark:text-gray-200">LOGO</div>
        </Link>
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
                  <div className="user__image" style={{ cursor: "pointer" }}>
                    <img src={user?.picture} />
                  </div>
                  <ul className="profile__nav__desktop dark:text-darkGray">
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

          <nav className={`navigation `}>
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
                href="/profile"
              >
                <li className="nav-list__item main__padding__sides ">
                  Profile
                </li>
              </Link>
              <Link onClick={() => setIsMenuActive(false)} href="/products">
                <li className="main__padding__sides nav-list__item">
                  Products
                </li>
              </Link>
              <Link onClick={() => setIsMenuActive(false)} href="/blogs">
                <li className="main__padding__sides nav-list__item">Blogs</li>
              </Link>
              <Link
                onClick={() => setIsMenuActive(false)}
                className=""
                href="/about"
              >
                <li className="nav-list__item main__padding__sides">About</li>
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
        <button
          onClick={toggleDarkMode}
          className="h-5 w-5 bg-red-800 z-auto absolute top-52 cursor-pointer"
        ></button>
      </div>
    </header>
  );
}
