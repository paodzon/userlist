"use client";

import styles from "./Button.module.css";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  disabled,
  backgroundColor,
  onClick,
  color,
}) => {
  
  const ButtonColor:object = { backgroundColor, color };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={ButtonColor}
      className={`${styles["button"]}`}
    >
      {children}
    </button>
  );
};

export default Button;
