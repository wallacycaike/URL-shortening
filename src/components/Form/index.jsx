import "./styles.scss";

export function Form({ inputType, inputPlaceholder, buttonText }) {
  return (
    <form>
      <input type={inputType} placeholder={inputPlaceholder} />
      <button type="submit">{buttonText}</button>
    </form>
  );
}
