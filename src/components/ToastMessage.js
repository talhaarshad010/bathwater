/** @format */

import React from "react";

const ToastMessagee = ({ message, type, onClose }) => {
  // Inline styles for different types of toast
  const styles = {
    toast: {
      padding: "10px 20px",
      borderRadius: "5px",
      color: "white",
      cursor: "pointer",
      position: "absolute",
      top: "20px",
      right: "20px",
      zIndex: "9999",
      display: "flex",
      alignItems: "center",
    },
    success: {
      backgroundColor: "#28a745",
    },
    error: {
      backgroundColor: "#dc3545",
    },
    info: {
      backgroundColor: "#17a2b8",
    },
  };

  // Merge the base toast style with the specific type style
  const toastStyle = { ...styles.toast, ...styles[type] };

  return (
    <div style={toastStyle} onClick={onClose}>
      <span>{message}</span>
    </div>
  );
};

export default ToastMessagee;
