import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ className, source, alt, id }) {
  return (
    <img
      className={ className }
      src={ source }
      alt={ alt }
      id={ id }
    />
  );
}

Image.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Image.defaultProps = {
  id: '',
  className: '',
};
