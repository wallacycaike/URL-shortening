import { useForm } from "react-hook-form";
import "./styles.scss";

export function Form({ createShortLink }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit({ link }) {
    createShortLink(link);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-input">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className={errors.link ? "error" : ""}
          {...register("link", {
            required: {
              value: true,
              message: "Please add a link",
            },
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+$/,
              message: "Please enter a valid URL",
            },
          })}
        />
        {errors.link && <span>{errors.link?.message}</span>}
      </div>

      <button type="submit">Shorten it!</button>
    </form>
  );
}
