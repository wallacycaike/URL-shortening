import { Navbar } from "./Navbar";
import logo from "../../images/logo.svg";
import "./styles.scss";

export function Header() {
  return (
    <header className="header container">
      <Navbar />
      <a href="#" className="logo">
        <img src={logo} alt="Shortly-logo" className="navbar-logo" />
      </a>
    </header>
  );
}
