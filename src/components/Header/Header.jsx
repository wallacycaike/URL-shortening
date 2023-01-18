import { Navbar } from "./Navbar/Navbar";
import logo from "../../images/logo.svg";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <Navbar />
      <a href="#" className="logo">
        <img src={logo} alt="Shortly-logo" className="navbar-logo" />
      </a>
    </header>
  );
}
