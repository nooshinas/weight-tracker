import React, { useState } from "react";
import "./Alert.scss";
import { FaTimes } from "react-icons/fa";

interface Props {
  message: string;
}

const Alert = ({ message }: Props) => {
  const [closed, setClosed] = useState(false);

  return (
    <div className={closed ? "hide" : "alert"}>
      <FaTimes className="close-btn" onClick={() => setClosed(true)} />
      <p>{message}</p>
    </div>
  );
};

export default Alert;
