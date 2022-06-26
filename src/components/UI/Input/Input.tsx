import React from "react";
import styles from "./Input.module.css";

const Input: React.FC<any> = (props) => {
  const { id, label, isValid, type, value, onChange, onBlur } = props;
  return (
    <div
      className={`${styles.control} ${isValid === false ? styles.invalid : ""}`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
