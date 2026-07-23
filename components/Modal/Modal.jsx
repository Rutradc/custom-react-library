import React, { useState } from 'react';
import './Modal.css';
import { Button } from '../Button/Button';

export function Modal({
  title,
  children,
  trigger,
  size = 'medium',
  closeOnOverlayClick = true,
  showActions = false,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }

    setIsOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (
      closeOnOverlayClick &&
      event.target === event.currentTarget
    ) {
      handleClose();
    }
  };

  return (
    <>
      <span onClick={() => setIsOpen(true)}>
        {trigger}
      </span>

      {isOpen && (
        <div
          className="modal-overlay"
          onClick={handleOverlayClick}
          {...props}
        >
          <div className={`modal modal-${size}`}>
            <div className="modal-header">
              <h2>{title}</h2>

              <button
                className="modal-close"
                onClick={handleClose}
              >
                ×
              </button>
            </div>

            <div className="modal-content">
              {children}
            </div>

            {showActions && (
              <div className="modal-actions">
                <Button
                  label={cancelText}
                  onClick={handleClose}
                  variant="secondary"
                />


                <Button
                  label={confirmText}
                  onClick={handleConfirm}
                  variant="danger"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;