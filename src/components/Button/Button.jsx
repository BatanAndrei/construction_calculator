import styles from "./Button.module.css";

const Button = ({
  children,
  variant,
  className = "",
  type = "button",
  ...rest
}) => {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
