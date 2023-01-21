import { Card } from "./Card";
import iconBrand from "../../images/icon-brand-recognition.svg";
import iconRecords from "../../images/icon-detailed-records.svg";
import iconCustomizable from "../../images/icon-fully-customizable.svg";

import "./styles.scss";

export function Statistics() {
  return (
    <section className="statistics-section">
      <div className="statistics-texts">
        <h2 className="statistics-title">Advanced Statistics</h2>
        <p className="statistics-paragraph">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="statistics-cards">
        <Card
          icon={iconBrand}
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        />
        <Card
          icon={iconRecords}
          title="Detailed Records"
          description="Gain insights ito who is clicking your links. Knowing when and where people engage with your content gelps inform better decisions."
        />
        <Card
          icon={iconCustomizable}
          title="Fully Customizable"
          description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </section>
  );
}
