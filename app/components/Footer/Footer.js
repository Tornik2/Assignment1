import "./Footer.css";

export default function Footer() {
  return (
    <footer className="padding__header__footer text-darkGray dark:text-gray-200 dark:bg-gray-900">
      <div className="footer_wrapper">
        <div className="footer_navigation">
          <ul>
            <li>Privacy policy</li>

            <li>Terms</li>
          </ul>
          <p className="copyright">2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
