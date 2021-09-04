import React from "react";
import "./Button.scss";

interface Props {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
