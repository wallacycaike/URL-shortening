import heroImg from "../../images/illustration-working.svg";
import { Button } from "../Button";
import "./styles.scss";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-img">
        <img src={heroImg} alt="Working-Ilustration" />
      </div>
      <div className="hero-texts">
        <h1 className="hero-title">More than just shorter links</h1>
        <p className="hero-description">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button />
      </div>
    </section>
  );
}
