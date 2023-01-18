import { Fragment, useState } from "react";
import "./Navbar.scss";

const navItens = ["Features", "Pricing", "Resources", "Login", "Sign up"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <ul className="navbar-list">
          {navItens.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <button onClick={toggleNavbar} className="fa-solid fa-bars"></button>
      </nav>
    </Fragment>
  );
}
