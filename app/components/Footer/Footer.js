import "./Footer.css";

export default function Footer() {
  return (
    <footer className="padding__header__footer">
      <div className="footer_wrapper">
        <div className="footer_navigation">
          <ul>
            <a href="">
              <li>Privacy policy</li>
            </a>
            <a href="">
              <li>Terms</li>
            </a>
          </ul>
          <p className="copyright">2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
