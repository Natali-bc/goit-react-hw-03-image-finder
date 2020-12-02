import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Spinner from 'react-loader-spinner';
import styles from '../Loader/Loader.module.css';
import PropTypes from 'prop-types';

class Loader extends React.Component {
  render() {
    return (
      <div className={styles.spinner}>
        <Spinner
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
}

export default Loader;
