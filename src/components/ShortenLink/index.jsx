import "./styles.scss";
import { Form } from "../Form";
import { ShortenedLinks } from "./ShortenedLinks";

export function ShortenLink() {
  return (
    <section className="shortenlink-section">
      <div className="shortenlink-itens">
        <div className="shortenlinks-form">
          <Form />
        </div>
        <div className="shortenlinks-links">
          <ShortenedLinks />
          <ShortenedLinks />
          <ShortenedLinks />
        </div>
      </div>
    </section>
  );
}
