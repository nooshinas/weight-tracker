import React, { useEffect, useState } from "react";
import "./Modal.scss";
import { FaTimes } from "react-icons/fa";

interface Props {
  visible: boolean;
  title?: string;
  onClose: () => void;
}

const Modal: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState(props.visible);

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  return (
    <div className={visible ? "modal-overlay" : "hide"}>
      <div className="modal">
        <div className="modal-header">
          <h3>{props.title}</h3>
          <FaTimes className="close-btn" onClick={props.onClose} />
        </div>
        <div className="modal-body">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
