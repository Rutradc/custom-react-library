import React from 'react';
import './Badge.css';

export function Badge({
  content,
  variant = 'primary',
  size = 'md',
  max,
  icon,
  isActive = true,
}) {
  let displayContent = content;
  if (typeof content === 'number' && typeof max === 'number' && content > max) {
    displayContent = `${max}+`;
  }

  return (
    <span
      className={`badge badge-${variant} badge-${size} ${isActive ? 'active' : 'inactive'}`}
    >
      {icon && <span className="badge-icon">{icon}</span>}
      <span className="badge-text">{displayContent}</span>
    </span>
  );
}

export default Badge;