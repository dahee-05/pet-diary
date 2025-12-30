import { useState } from "react";
import styles from "./Button.module.css";

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
      ${opacity ? styles.opacity : ""}`}
      {...rest}
    >
      {value}
    </button>
  );
}
