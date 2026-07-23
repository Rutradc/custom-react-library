import React from 'react';
import './Card.css';

export function Card({
  title,
  subtitle,
  image,
  imageAlt = 'Card image',
  children,
  footer,
  header,
  onClick,
  ...props
}) {
  const isClickable = typeof onClick === 'function';

  return (
    <div
      className={`card ${isClickable ? 'card-clickable' : ''}`}
      onClick={onClick}
      {...props}
    >
      {header ? (
        <div className="card-header">{header}</div>
      ) : (image || title || subtitle) && (
        <div className="card-header-default">
          {image && <img src={image} alt={imageAlt} className="card-image" />}
          {(title || subtitle) && (
            <div className="card-titles">
              {title && <h3 className="card-title">{title}</h3>}
              {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
            </div>
          )}
        </div>
      )}

      <div className="card-content">
        {children}
      </div>

      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;