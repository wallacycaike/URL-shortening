import { Fragment, useState } from "react";
import "./styles.scss";

const navItens = ["Features", "Pricing", "Resources"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="navbar-list">
          <ul className="navbar-itens">
            {navItens.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <div className="navbar-authenticators">
            <a href="#" className="authenticator-login">
              Login
            </a>
            <a href="#" className="authenticator-signUp">
              Sign Up
            </a>
          </div>
        </div>
        <button
          onClick={toggleNavbar}
          className="navbar-btn fa-solid fa-bars"
        ></button>
      </nav>
    </Fragment>
  );
}
