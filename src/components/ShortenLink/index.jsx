import "./styles.scss";
import { Form } from "../Form";

export function ShortenLink() {
  return (
    <section className="shortenlink-section">
      <Form
        inputType="text"
        inputPlaceholder="Shorten a link here..."
        buttonText="Shorten it!"
      />
    </section>
  );
}
