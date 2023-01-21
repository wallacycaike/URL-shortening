import logo from "../../images/logo.svg";

import "./styles.scss";

export function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Shortly Logo" className="footer-logo" />
      <div className="footer-links">
        <div className="features-links">
          <span className="features-title">Features</span>
          <a href="#" className="features-link">
            Link Shortening
          </a>
          <a href="#" className="features-link">
            Branded Links
          </a>
          <a href="#" className="features-link">
            Analytics
          </a>
        </div>
        <div className="resources-links">
          <span className="resources-title">Resources</span>
          <a href="#" className="resources-link">
            Blog
          </a>
          <a href="#" className="resources-link">
            Developers
          </a>
          <a href="#" className="resources-link">
            Support
          </a>
        </div>
        <div className="company-links">
          <span className="company-title">Company</span>
          <a href="#" className="company-link">
            About
          </a>
          <a href="#" className="company-link">
            Our Team
          </a>
          <a href="#" className="company-link">
            Careers
          </a>
          <a href="#" className="company-link">
            Contact
          </a>
        </div>
      </div>
      <div className="footer-socials">
        <a href="#" className="socials-link">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="#" className="socials-link">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" className="socials-link">
          <i className="fa-brands fa-pinterest"></i>
        </a>
        <a href="#" className="socials-link">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/wallacycaike" target="_blank">
          Wachiles
        </a>
        .
      </div>
    </footer>
  );
}
