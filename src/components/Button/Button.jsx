import React from 'react';
import './Button.css';

export function Button({
  variant = 'primary',
  label,
  isLoading = false,
  icon,
  disabled,
  onClick,
  ...props
}) {
  return (
    <button
      className={`btn ${variant}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading ? '...' : icon}
      <span>{label}</span>
    </button>
  );
}

export default Button;