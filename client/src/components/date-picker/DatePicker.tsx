import React from "react";
import "./DatePicker.scss";

const DatePicker = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <div className="date-picker">
      <input type="date" {...props} />
    </div>
  );
};

export default DatePicker;
