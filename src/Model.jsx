import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Model = () => {
  const { isModalOpen, closeModel } = useGlobalContext();
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>model content</h3>
        <button className="close-modal-btn" onClick={closeModel}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Model;
