import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}
const portalWrapperElm = createPortalWrapper();
const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  visible = false,
  onClose = () => {},
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  const renderContent = (
    <div
      className={`fixed inset-0 z-50 ${containerClassName}`}
      style={containerStyle}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50 overlay"
        onClick={onClose}
      ></div>
      <div
        className={`relative z-10 content ${bodyClassName}`}
        style={bodyStyle}
      >
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};

Portal.propTypes = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Portal;
