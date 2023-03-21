import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default function ButtonComponents({ dataTestId, id, onClick, children }) {
  return (
    <Button
      type="button"
      data-testid={ dataTestId }
      id={ id }
      onClick={ onClick }
    >
      {children}
    </Button>
  );
}

ButtonComponents.propTypes = {
  dataTestId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  id: PropTypes.string,
};

ButtonComponents.defaultProps = {
  id: '',
  dataTestId: '',
};
