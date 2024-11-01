
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <img
          src="https://i.imgur.com/xxsj5QF.png"
          alt="Swapnil Sharma Print Company"
          className="navbar-logo"
        />

        <h2>Contact</h2>

        <address>info@swapnilsharma.in</address>
        <br />
        <address>+91 9755448822</address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>
          <ul className="nav__ul">
            <li>
              <a href="/shipping-policy">Shipping Policy</a>
            </li>

            <li>
              <a href="/terms-of-service">Terms of service</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/returns-policy">Returns Policy</a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <h2 className="nav__title">Media</h2>

          <ul className="nav__ul">
            <li>
              <a href="https://www.pexels.com/@hellochemo/">Pexels</a>
            </li>

            <li>
              <a href="https://unsplash.com/@eyeswithmyopia">Unsplash</a>
            </li>

            <li>
              <a href="https://www.everypixel.com/epx/users/eyeswithmyopia">Every Pixel</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Social</h2>

          <ul className="nav__ul">
            <li>
              <a href="https://www.instagram.com/hellochemo">Instagram</a>
            </li>
            <li>
              <a href="https://x.com/maybeswapni1">X (Twitter)</a>
            </li>
          </ul>
        </li>
      </ul>


      <div className="legal">
        <p>&copy; 2024 Copyright. All rights reserved.</p>

        <div className="legal__links">
          <span>Made with <span className="heart">♥</span> by Swapnil</span>
        </div>
      </div>
    </footer>
  );
}