import React from "react";
import "./Input.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  suffix?: string;
}

const Input = (props: Props) => {
  return (
    <div className="input" data-suffix={props.suffix}>
      <input type="number" {...props} />
    </div>
  );
};

export default Input;
