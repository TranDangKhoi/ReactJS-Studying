import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}
const portalWrapper = createPortalWrapper();
const Portal = () => {
  useEffect(() => {
    document.body.appendChild(portalWrapper);
  }, []);
  const renderContent = <div>Lorem</div>;
  return createPortal(renderContent, portalWrapper);
};

export default Portal;
