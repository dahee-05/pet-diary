import { useState } from "react";
import styles from "../css/Button.module.css";

export default function Button({
  type,
  value,
  onClick,
  active,
  opacity,
  className,
  ...rest
}) {
  return (
    <button
      type={type}
      value={value}
      onClick={() => onClick?.(value)}
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
