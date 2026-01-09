import { useState } from "react";
import styles from "../css/Button.module.css";

export default function Button({
  type = "button",
  active,
  opacity,
  value,
  className,
  ...rest
}) {
  return (
    <button
      type={type}
      className={`${styles[className]}
      ${active ? styles.active : ""}
      ${opacity ? styles.opacity : ""}
      ${rest.disabled ? styles.opacity : styles.opaque}`}
      {...rest}
    >
      {value}
    </button>
  );
}
