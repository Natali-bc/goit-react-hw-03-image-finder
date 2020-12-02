import React from 'react';
import styles from '../Button/Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ fetchData }) => {
  return (
    <button type="button" onClick={fetchData} className={styles.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default Button;
