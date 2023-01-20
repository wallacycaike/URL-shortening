import "./styles.scss";

export function Card({ icon, alt = "Card Icon", title, description }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={icon} alt={alt} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}
