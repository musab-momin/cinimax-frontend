import React from "react";
import classes from "./button.module.scss";
import cx from "classnames";

interface ButtonProps {
  variant: "PRIMARY" | "SECONDARY";
  children: string | React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  [key: string]: any;
}

const Button = ({ variant, onClick, children, ...restProps }: ButtonProps) => {
  return (
    <button
      className={cx(classes.btn, restProps?.className, {
        [classes["primary"]]: variant === "PRIMARY",
        [classes["secondary"]]: variant === "SECONDARY",
      })}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
