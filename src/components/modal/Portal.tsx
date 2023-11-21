import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children } : { children: React.ReactNode}) => {
  if (typeof window === 'object') {
    return ReactDOM.createPortal(
      children,
      document.body
    );
  }
  return null;
};

export default Portal;