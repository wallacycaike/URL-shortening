import { useForm } from "react-hook-form";
import "./styles.scss";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input type="text" placeholder="Shorten a link here..." />
    //   <button type="submit">Shorten it!</button>
    // </form>

    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* include validation with required or other standard HTML validation rules */}
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
      {/* errors will return when field validation fails  */}
      {errors.link && <span>{errors.link?.message}</span>}

      <button type="submit">Shorten it!</button>
    </form>
  );
}
