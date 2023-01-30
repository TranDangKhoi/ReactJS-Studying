import React from 'react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
function createPortalWrapper() {
  const element = document.createElement('div')
  element.id = 'portal-wrapper'
  return element
}
const portalWrapperElm = createPortalWrapper()
const Portal = ({
  containerClassName = '',
  bodyClassName = '',
  containerStyle = {},
  bodyStyle = {},
  overlay = true,
  onClose = () => {},
  children
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm)
  }, [])
  const renderContent = (
    <div
      className={containerClassName}
      style={containerStyle}
    >
      {overlay && (
        <div
          className='absolute inset-0 bg-black bg-opacity-50 overlay'
          onClick={onClose}
        ></div>
      )}
      <div
        className={bodyClassName}
        style={bodyStyle}
      >
        {children}
      </div>
    </div>
  )
  return createPortal(renderContent, portalWrapperElm)
}

Portal.propTypes = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  overlay: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
}

export default Portal
